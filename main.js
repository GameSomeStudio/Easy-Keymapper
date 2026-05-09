const { execSync } = require('child_process');
const { app, BrowserWindow, ipcMain, Tray, Menu } = require('electron');
const path = require('path');
const fs = require('fs');
const { uIOhook, UiohookKey } = require('uiohook-napi');
const robot = require('robotjs');

let toastWindow = null;
let mainWindow = null;
let tray = null;
let keyMappings = {};
let active = true;
let storePath = '';


let defaultMappings = {};

let store = {
    get(key) {
        try {
            if (fs.existsSync(storePath)) {
                const data = JSON.parse(fs.readFileSync(storePath, 'utf8'));
                return data[key];
            }
        } catch (e) {}
        return undefined;
    },
    set(key, value) {
        try {
            let data = {};
            if (fs.existsSync(storePath)) data = JSON.parse(fs.readFileSync(storePath, 'utf8'));
            data[key] = value;
            fs.writeFileSync(storePath, JSON.stringify(data, null, 2));
        } catch (e) {}
    }
};

const reverseKeyCodeMap = {};
Object.keys(UiohookKey).forEach(keyName => {
    const keyCode = UiohookKey[keyName];
    if (typeof keyCode === 'number' && keyCode > 0) {
        reverseKeyCodeMap[keyCode] = keyName;
    }
});

const robotKeyMap = {
    'Escape': 'escape', 'F1': 'f1', 'F2': 'f2', 'F3': 'f3', 'F4': 'f4',
    'F5': 'f5', 'F6': 'f6', 'F7': 'f7', 'F8': 'f8', 'F9': 'f9', 'F10': 'f10',
    'F11': 'f11', 'F12': 'f12',
    'PrintScreen': 'printscreen', 'ScrollLock': 'scrolllock', 'Pause': 'pause',
    'Backquote': '`',
    'Digit1': '1', 'Digit2': '2', 'Digit3': '3', 'Digit4': '4', 'Digit5': '5',
    'Digit6': '6', 'Digit7': '7', 'Digit8': '8', 'Digit9': '9', 'Digit0': '0',
    'Minus': '-', 'Equal': '=',
    'Backspace': 'backspace',
    'Insert': 'insert', 'Home': 'home', 'PageUp': 'pageup',
    'Tab': 'tab',
    'Q': 'q', 'W': 'w', 'E': 'e', 'R': 'r', 'T': 't', 'Y': 'y', 'U': 'u', 'I': 'i', 'O': 'o', 'P': 'p',
    'A': 'a', 'S': 's', 'D': 'd', 'F': 'f', 'G': 'g', 'H': 'h', 'J': 'j', 'K': 'k', 'L': 'l',
    'Z': 'z', 'X': 'x', 'C': 'c', 'V': 'v', 'B': 'b', 'N': 'n', 'M': 'm',
    'KeyQ': 'q', 'KeyW': 'w', 'KeyE': 'e', 'KeyR': 'r', 'KeyT': 't', 'KeyY': 'y', 'KeyU': 'u', 'KeyI': 'i', 'KeyO': 'o', 'KeyP': 'p',
    'KeyA': 'a', 'KeyS': 's', 'KeyD': 'd', 'KeyF': 'f', 'KeyG': 'g', 'KeyH': 'h', 'KeyJ': 'j', 'KeyK': 'k', 'KeyL': 'l',
    'KeyZ': 'z', 'KeyX': 'x', 'KeyC': 'c', 'KeyV': 'v', 'KeyB': 'b', 'KeyN': 'n', 'KeyM': 'm',
    'BracketLeft': '[', 'BracketRight': ']', 'Backslash': '\\',
    'Semicolon': ';', 'Quote': '\'', 'Slash': '/',
    'Comma': ',', 'Period': '.',
    'Delete': 'delete', 'End': 'end', 'PageDown': 'pagedown',
    'CapsLock': 'capslock',
    'Enter': 'enter',
    'ShiftLeft': 'shift', 'ShiftRight': 'shift', 'Shift': 'shift',
    'ArrowUp': 'up', 'ArrowDown': 'down',
    'ArrowLeft': 'left', 'ArrowRight': 'right',
    'ControlLeft': 'control', 'ControlRight': 'control', 'Control': 'control',
    'MetaLeft': 'alt', 'MetaRight': 'alt', 'Meta': 'alt',
    'AltLeft': 'alt', 'AltRight': 'alt', 'Alt': 'alt',
    'Space': 'space',
    'NumLock': 'numlock',
    
    'NumpadDivide': 'numpad_/', 'NumpadMultiply': 'numpad_*',
    'NumpadSubtract': 'numpad_-', 'NumpadAdd': 'numpad_+',
    'Numpad7': 'numpad_7', 'Numpad8': 'numpad_8', 'Numpad9': 'numpad_9',
    'Numpad4': 'numpad_4', 'Numpad5': 'numpad_5', 'Numpad6': 'numpad_6',
    'Numpad1': 'numpad_1', 'Numpad2': 'numpad_2', 'Numpad3': 'numpad_3',
    'Numpad0': 'numpad_0', 'NumpadDecimal': 'numpad_.', 'NumpadEnter': 'numpad_enter'
};

function showOverlayToast(state) {
	    
    if (state === 'ON') {
        
        execSync('powershell -c "[Console]::Beep(800,100)"');
        setTimeout(() => execSync('powershell -c "[Console]::Beep(1000,100)"'), 120);
    } else {
        
        execSync('powershell -c "[Console]::Beep(400,100)"');
        setTimeout(() => execSync('powershell -c "[Console]::Beep(300,100)"'), 120);
    }
    if (toastWindow) {
        toastWindow.close();
        toastWindow = null;
    }
    
    const text = state === 'ON' ? 'Keymapping ON' : 'Keymapping OFF';
    const color = state === 'ON' ? '#00ff88' : '#ff6b6b';
    
    toastWindow = new BrowserWindow({
        width: 280,
        height: 55,
        transparent: true,
        frame: false,
        alwaysOnTop: true,
        skipTaskbar: true,
        focusable: false,
        resizable: false,
        webPreferences: { 
            nodeIntegration: false, 
            contextIsolation: true 
        }
    });
    
    const html = `
    <!DOCTYPE html>
    <html>
    <head><meta charset="UTF-8"></head>
    <body style="margin:0;background:transparent;display:flex;justify-content:center;align-items:center;height:100vh;overflow:hidden;">
        <div id="toast" style="
            background: rgba(0,0,0,0.9);
            color: ${color};
            padding: 10px 25px;
            border-radius: 25px;
            font-family: 'Segoe UI', Tahoma, sans-serif;
            font-size: 16px;
            font-weight: bold;
            letter-spacing: 1px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.6);
            border: 1px solid ${color};
            opacity: 0;
            transition: opacity 0.3s ease;
        ">${text}</div>
        <script>
            setTimeout(() => { document.getElementById('toast').style.opacity = '1'; }, 50);
            setTimeout(() => { document.getElementById('toast').style.opacity = '0'; }, 1500);
        </script>
    </body>
    </html>`;
    
    toastWindow.loadURL('data:text/html;charset=utf-8,' + encodeURIComponent(html));
    
    const { screen } = require('electron');
    const primaryDisplay = screen.getPrimaryDisplay();
    const { width } = primaryDisplay.workAreaSize;
    toastWindow.setPosition(Math.round(width / 2 - 140), 30);
    
    setTimeout(() => {
        if (toastWindow) {
            toastWindow.close();
            toastWindow = null;
        }
    }, 2200);
}

function findMapping(sourceName) {
    if (keyMappings[sourceName] && keyMappings[sourceName] !== sourceName) return keyMappings[sourceName];
    if (sourceName.length === 1 && sourceName >= 'A' && sourceName <= 'Z') {
        const kv = 'Key' + sourceName;
        if (keyMappings[kv] && keyMappings[kv] !== kv) return keyMappings[kv];
    }
    
    if (sourceName.startsWith('Numpad')) {
        if (keyMappings[sourceName] && keyMappings[sourceName] !== sourceName) return keyMappings[sourceName];
    }
    return null;
}

function getRobotKey(targetName) {
    if (robotKeyMap[targetName]) return robotKeyMap[targetName];
    if (targetName.startsWith('Key') && targetName.length === 4) {
        const short = targetName.substring(3);
        if (robotKeyMap[short]) return robotKeyMap[short];
    }
    
    if (targetName.startsWith('Numpad') && robotKeyMap[targetName]) {
        return robotKeyMap[targetName];
    }
    return null;
}


function resetToDefault() {

    const defaultMappingsLocal = {};
    Object.keys(keyMappings).forEach(key => {
        defaultMappingsLocal[key] = key;
    });
    keyMappings = defaultMappingsLocal;
    store.set('keyMappings', defaultMappingsLocal);
    
    
    if (mainWindow && !mainWindow.isDestroyed()) {
        mainWindow.webContents.send('reset-to-default');
    }
}

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1450,        
        height: 850,        
        minWidth: 1200,     
        minHeight: 850,     
        webPreferences: { nodeIntegration: true, contextIsolation: false },
        title: 'Easy KeyMapper'
    });
    
    mainWindow.setMenu(null);
    mainWindow.loadFile('index.html');
	mainWindow.setSize(1550, 720);
	mainWindow.center(); 
    
    
    mainWindow.on('close', (event) => {
        app.isQuitting = true;
        resetToDefault();
        try { uIOhook.stop(); } catch (e) {}
        mainWindow.destroy();
        app.quit();
    });
}

function createTray() {
    const iconPath = path.join(app.getPath('userData'), 'tray-icon.png');
    if (!fs.existsSync(iconPath)) {
        const emptyPng = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==', 'base64');
        fs.writeFileSync(iconPath, emptyPng);
    }
    tray = new Tray(iconPath);
    const contextMenu = Menu.buildFromTemplate([
        { label: 'Yönlendirme: AÇIK', id: 'toggle',
            click: (menuItem) => {
                active = !active;
                menuItem.label = 'Yönlendirme: ' + (active ? 'AÇIK' : 'KAPALI');
                if (mainWindow) mainWindow.webContents.send('status-update', active ? 'Aktif' : 'Pasif');
            }
        },
        { type: 'separator' },
        { label: 'Pencereyi Göster', click: () => { if (mainWindow) { mainWindow.show(); mainWindow.focus(); } } },
		{ 
			label: 'Çıkış', 
			click: () => { 
				app.isQuitting = true;
				resetToDefault();  
				mainWindow.destroy(); 
				app.quit();         
			}
		}
    ]);
    tray.setToolTip('Easy KeyMapper');
    tray.setContextMenu(contextMenu);
    tray.on('click', () => { if (mainWindow) { mainWindow.show(); mainWindow.focus(); } });
}

function startKeyboardHook() {
    const blockedKeys = new Set();
    
    
    let ctrlPressed = false;
    let shiftPressed = false;

    uIOhook.on('keydown', (event) => {
        const sourceName = reverseKeyCodeMap[event.keycode] || '?';
        
        
        if (sourceName && (
            sourceName.includes('Control') || sourceName.includes('Ctrl')
        )) {
            ctrlPressed = true;
        }
        if (sourceName && sourceName.includes('Shift')) {
            shiftPressed = true;
        }
        
        
		if (ctrlPressed && shiftPressed && (sourceName === 'K' || sourceName === 'KeyK')) {
			ctrlPressed = false;
			shiftPressed = false;
			
			
setImmediate(() => {
    active = !active;

    if (mainWindow) {
        mainWindow.webContents.send('status-update', active ? 'Active - Gaming Mode' : 'Paused - Typing Mode');
        showOverlayToast(active ? 'ON' : 'OFF');
    }
    
    
    if (tray) {
        tray.setToolTip('Easy KeyMapper - ' + (active ? 'Remapping ON' : 'Remapping OFF'));
        const contextMenu = Menu.buildFromTemplate([
            { 
                label: 'Remapping: ' + (active ? 'ON' : 'OFF'), 
                id: 'toggle',
                click: (menuItem) => {
                    active = !active;
                    menuItem.label = 'Remapping: ' + (active ? 'ON' : 'OFF');
                    if (mainWindow) {
                        mainWindow.webContents.send('status-update', active ? 'Active - Gaming Mode' : 'Paused - Typing Mode');
						showOverlayToast(active ? 'ON' : 'OFF');

                        
                    }
                }
            },
            { type: 'separator' },
            { label: 'Show Window', click: () => { if (mainWindow) { mainWindow.show(); mainWindow.focus(); } } },
            { label: 'Exit', click: () => { 
                app.isQuitting = true;
                resetToDefault();
                if (mainWindow) mainWindow.destroy();
                app.quit();
            }}
        ]);
        tray.setContextMenu(contextMenu);
    }
});
			return;
		}
        
        if (blockedKeys.has(sourceName)) {
            blockedKeys.delete(sourceName);
            return;
        }

        if (!active) return;

        const target = findMapping(sourceName);
        if (!target) return;

        const robotKey = getRobotKey(target);
        if (!robotKey) return;

        const targetShort = target.startsWith('Key') ? target.substring(3) : target;
        blockedKeys.add(targetShort);
        blockedKeys.add(target);

        try {
            robot.keyToggle(robotKey, 'down');
        } catch (e) {
            blockedKeys.delete(targetShort);
            blockedKeys.delete(target);
        }
    });

    uIOhook.on('keyup', (event) => {
        const sourceName = reverseKeyCodeMap[event.keycode] || '?';
        
        
        if (sourceName && (
            sourceName.includes('Control') || sourceName.includes('Ctrl')
        )) ctrlPressed = false;
        if (sourceName && sourceName.includes('Shift')) shiftPressed = false;
        
        if (blockedKeys.has(sourceName)) {
            blockedKeys.delete(sourceName);
            return;
        }

        if (!active) return;

        const target = findMapping(sourceName);
        if (!target) return;

        const robotKey = getRobotKey(target);
        if (!robotKey) return;

        const targetShort = target.startsWith('Key') ? target.substring(3) : target;
        blockedKeys.add(targetShort);
        blockedKeys.add(target);

        try {
            robot.keyToggle(robotKey, 'up');
        } catch (e) {
            blockedKeys.delete(targetShort);
            blockedKeys.delete(target);
        }
    });

    uIOhook.start();

}

function setupIPC() {
    ipcMain.on('update-mappings', (event, mappings) => {
        keyMappings = mappings;
        store.set('keyMappings', mappings);
    });
    ipcMain.on('save-profile', (event, profile) => {
        store.set('currentProfile', profile);
        event.reply('profile-saved', true);
    });
    ipcMain.on('load-profile', (event) => {
        event.reply('profile-data', store.get('currentProfile') || null);
    });
    ipcMain.on('get-stored-mappings', (event) => {
        const mappings = store.get('keyMappings');
        if (mappings) event.reply('stored-mappings', mappings);
    });
	ipcMain.on('app-quit', () => {
    app.isQuitting = true;
    if (mainWindow) mainWindow.close();
    app.quit();
});
}

app.whenReady().then(() => {
    storePath = path.join(app.getPath('userData'), 'keymapper-config.json');
    const saved = store.get('keyMappings');
    if (saved) {
        keyMappings = saved;
    }
    
    
    defaultMappings = JSON.parse(JSON.stringify(keyMappings));
    
    createWindow();
    createTray();
    setupIPC();
    startKeyboardHook();
});


app.on('before-quit', () => {
    app.isQuitting = true;
    resetToDefault();
    try { uIOhook.stop(); } catch (e) {}
});


app.on('window-all-closed', () => {
    
});