
const keyboardLayout = [
    
    [
        { key: 'Esc', code: 'Escape', width: 'normal', type: 'special', groupEnd: true },
        { key: 'F1', code: 'F1', width: 'normal', type: 'special' },
        { key: 'F2', code: 'F2', width: 'normal', type: 'special' },
        { key: 'F3', code: 'F3', width: 'normal', type: 'special' },
        { key: 'F4', code: 'F4', width: 'normal', type: 'special', groupEnd: true },
        { key: 'F5', code: 'F5', width: 'normal', type: 'special' },
        { key: 'F6', code: 'F6', width: 'normal', type: 'special' },
        { key: 'F7', code: 'F7', width: 'normal', type: 'special' },
        { key: 'F8', code: 'F8', width: 'normal', type: 'special', groupEnd: true },
        { key: 'F9', code: 'F9', width: 'normal', type: 'special' },
        { key: 'F10', code: 'F10', width: 'normal', type: 'special' },
        { key: 'F11', code: 'F11', width: 'normal', type: 'special' },
        { key: 'F12', code: 'F12', width: 'normal', type: 'special' },
		{ spacer: true },
        { key: 'PrtSc', code: 'PrintScreen', width: 'normal', type: 'special' },
        { key: 'ScrLk', code: 'ScrollLock', width: 'normal', type: 'special' },
        { key: 'Pause', code: 'Pause', width: 'normal', type: 'special' }
    ],
    
    [
        { key: '`', code: 'Backquote', width: 'normal' },
        { key: '1', code: 'Digit1', width: 'normal' },
        { key: '2', code: 'Digit2', width: 'normal' },
        { key: '3', code: 'Digit3', width: 'normal' },
        { key: '4', code: 'Digit4', width: 'normal' },
        { key: '5', code: 'Digit5', width: 'normal' },
        { key: '6', code: 'Digit6', width: 'normal' },
        { key: '7', code: 'Digit7', width: 'normal' },
        { key: '8', code: 'Digit8', width: 'normal' },
        { key: '9', code: 'Digit9', width: 'normal' },
        { key: '0', code: 'Digit0', width: 'normal' },
        { key: '-', code: 'Minus', width: 'normal' },
        { key: '=', code: 'Equal', width: 'normal' },
        { key: 'Backspace', code: 'Backspace', width: 'wide' },
        { spacer: true }, 
        { key: 'Ins', code: 'Insert', width: 'normal', type: 'special' },
        { key: 'Home', code: 'Home', width: 'normal', type: 'special' },
        { key: 'PgUp', code: 'PageUp', width: 'normal', type: 'special' }
    ],
    
    [
        { key: 'Tab', code: 'Tab', width: 'wide' },
        { key: 'Q', code: 'KeyQ', width: 'normal' },
        { key: 'W', code: 'KeyW', width: 'normal' },
        { key: 'E', code: 'KeyE', width: 'normal' },
        { key: 'R', code: 'KeyR', width: 'normal' },
        { key: 'T', code: 'KeyT', width: 'normal' },
        { key: 'Y', code: 'KeyY', width: 'normal' },
        { key: 'U', code: 'KeyU', width: 'normal' },
        { key: 'I', code: 'KeyI', width: 'normal' },
        { key: 'O', code: 'KeyO', width: 'normal' },
        { key: 'P', code: 'KeyP', width: 'normal' },
        { key: '[', code: 'BracketLeft', width: 'normal' },
        { key: ']', code: 'BracketRight', width: 'normal' },
        { key: '\\', code: 'Backslash', width: 'normal' },
        { spacer: true }, 
        { key: 'Del', code: 'Delete', width: 'normal', type: 'special' },
        { key: 'End', code: 'End', width: 'normal', type: 'special' },
        { key: 'PgDn', code: 'PageDown', width: 'normal', type: 'special' }
    ],
    
    [
        { key: 'Caps Lock', code: 'CapsLock', width: 'wide2' },
        { key: 'A', code: 'KeyA', width: 'normal' },
        { key: 'S', code: 'KeyS', width: 'normal' },
        { key: 'D', code: 'KeyD', width: 'normal' },
        { key: 'F', code: 'KeyF', width: 'normal' },
        { key: 'G', code: 'KeyG', width: 'normal' },
        { key: 'H', code: 'KeyH', width: 'normal' },
        { key: 'J', code: 'KeyJ', width: 'normal' },
        { key: 'K', code: 'KeyK', width: 'normal' },
        { key: 'L', code: 'KeyL', width: 'normal' },
        { key: ';', code: 'Semicolon', width: 'normal' },
        { key: "'", code: 'Quote', width: 'normal' },
        { key: 'Enter', code: 'Enter', width: 'wide' }
    ],
    
    [
        { key: 'Shift', code: 'ShiftLeft', width: 'extra-wide' },
        { key: 'Z', code: 'KeyZ', width: 'normal' },
        { key: 'X', code: 'KeyX', width: 'normal' },
        { key: 'C', code: 'KeyC', width: 'normal' },
        { key: 'V', code: 'KeyV', width: 'normal' },
        { key: 'B', code: 'KeyB', width: 'normal' },
        { key: 'N', code: 'KeyN', width: 'normal' },
        { key: 'M', code: 'KeyM', width: 'normal' },
        { key: ',', code: 'Comma', width: 'normal' },
        { key: '.', code: 'Period', width: 'normal' },
        { key: '/', code: 'Slash', width: 'normal' },
        { key: 'Shift', code: 'ShiftRight', width: 'wide' },
		{ spacer: true },
		{ spacer: true },
		{ spacer: true },		
        { key: '↑', code: 'ArrowUp', width: 'normal', type: 'special' }
    ],
    
    [
        { key: 'Ctrl', code: 'ControlLeft', width: 'wide' },
        { key: 'Win', code: 'MetaLeft', width: 'wide' },
        { key: 'Alt', code: 'AltLeft', width: 'wide' },
        { key: 'Space', code: 'Space', width: 'xxl-wide' },
        { key: 'Alt Gr', code: 'AltRight', width: 'wide' },
        { key: 'Win', code: 'MetaRight', width: 'wide' },
        { key: 'Menu', code: 'ContextMenu', width: 'wide' },
        { key: 'Ctrl', code: 'ControlRight', width: 'wide', groupEnd: true  },
        { spacer: true },
		{ spacer: true },
        { key: '←', code: 'ArrowLeft', width: 'normal', type: 'special' },
        { key: '↓', code: 'ArrowDown', width: 'normal', type: 'special' },
        { key: '→', code: 'ArrowRight', width: 'normal', type: 'special' }
    ]
];


const numpadLayout = [
    
    [
        { key: 'NumLk', code: 'NumLock', width: 'normal', type: 'special' },
        { key: '/', code: 'NumpadDivide', width: 'normal', type: 'special' },
        { key: '*', code: 'NumpadMultiply', width: 'normal', type: 'special' },
        { key: '-', code: 'NumpadSubtract', width: 'normal', type: 'special' }
    ],
    
    [
        { key: '7', code: 'Numpad7', width: 'normal' },
        { key: '8', code: 'Numpad8', width: 'normal' },
        { key: '9', code: 'Numpad9', width: 'normal' },
        { key: '+', code: 'NumpadAdd', width: 'normal', type: 'special' }
    ],
    
    [
        { key: '4', code: 'Numpad4', width: 'normal' },
        { key: '5', code: 'Numpad5', width: 'normal' },
        { key: '6', code: 'Numpad6', width: 'normal' },
        { spacer: true } 
    ],
    
    [
        { key: '1', code: 'Numpad1', width: 'normal' },
        { key: '2', code: 'Numpad2', width: 'normal' },
        { key: '3', code: 'Numpad3', width: 'normal' },
        { key: 'Enter', code: 'NumpadEnter', width: 'normal', type: 'special' }
    ],
    
    [
        { key: '0', code: 'Numpad0', width: 'extra-wide' },
        { key: '.', code: 'NumpadDecimal', width: 'normal' },
        { spacer: true } 
    ]
];


let keyMappings = {};

function initKeyMappings() {
    keyMappings = {};
    
    keyboardLayout.forEach(row => {
        row.forEach(key => {
            if (!key.spacer) {
                keyMappings[key.code] = key.code;
            }
        });
    });
    
    numpadLayout.forEach(row => {
        row.forEach(key => {
            if (!key.spacer) {
                keyMappings[key.code] = key.code;
            }
        });
    });
}


function createSpacer(width = 'normal') {
    const spacer = document.createElement('div');
    spacer.className = 'key-spacer';
    if (width === 'group') {
        spacer.classList.add('group-spacer');
    } else if (width === 'section') {
        spacer.classList.add('section-spacer');
    }
    return spacer;
}


function createKeyElement(keyData) {
    const keyElement = document.createElement('div');
    keyElement.className = 'key';
    keyElement.dataset.code = keyData.code;
    keyElement.textContent = keyData.key;
    keyElement.dataset.originalKey = keyData.key;
    keyElement.dataset.width = keyData.width;
    keyElement.dataset.type = keyData.type || 'normal';
    
    
    if (keyData.width !== 'normal') {
        keyElement.classList.add(keyData.width);
    }
    
    
    if (keyData.type === 'special') {
        keyElement.classList.add('special');
    }

    
    keyElement.draggable = true;
    keyElement.addEventListener('dragstart', handleDragStart);
    keyElement.addEventListener('dragover', handleDragOver);
    keyElement.addEventListener('dragleave', handleDragLeave);
    keyElement.addEventListener('drop', handleDrop);
    keyElement.addEventListener('dragend', handleDragEnd);

    return keyElement;
}


function buildKeyboard() {
    const keyboard = document.getElementById('keyboard');
    keyboard.innerHTML = '';

    
    const mainWrapper = document.createElement('div');
    mainWrapper.className = 'keyboard-main-wrapper';

    const mainKeyboard = document.createElement('div');
    mainKeyboard.className = 'keyboard-main';

    
    keyboardLayout.forEach((row, rowIndex) => {
        const rowElement = document.createElement('div');
        rowElement.className = 'keyboard-row';

        row.forEach((keyData, keyIndex) => {
            
            if (keyData.spacer) {
                rowElement.appendChild(createSpacer('normal'));
                return;
            }

            
            if (keyIndex > 0 && row[keyIndex - 1].groupEnd) {
                rowElement.appendChild(createSpacer('group'));
            }
            
            
            if (keyIndex > 0 && row[keyIndex - 1].sectionEnd) {
                rowElement.appendChild(createSpacer('section'));
            }

            const keyElement = createKeyElement(keyData);
            rowElement.appendChild(keyElement);
        });

        mainKeyboard.appendChild(rowElement);
    });

    
    const numpadKeyboard = document.createElement('div');
    numpadKeyboard.className = 'keyboard-numpad';

    
    const numpadTitle = document.createElement('div');
    numpadTitle.className = 'numpad-title';
    numpadTitle.textContent = 'NumPad';
    numpadKeyboard.appendChild(numpadTitle);

    numpadLayout.forEach((row, rowIndex) => {
        const rowElement = document.createElement('div');
        rowElement.className = 'keyboard-row numpad-row';

        row.forEach((keyData, keyIndex) => {
            if (keyData.spacer) {
                rowElement.appendChild(createSpacer('normal'));
                return;
            }

            const keyElement = createKeyElement(keyData);
            rowElement.appendChild(keyElement);
        });

        numpadKeyboard.appendChild(rowElement);
    });

    mainWrapper.appendChild(mainKeyboard);
    mainWrapper.appendChild(numpadKeyboard);
    keyboard.appendChild(mainWrapper);
}


let draggedElement = null;

function handleDragStart(e) {
    draggedElement = this;
    this.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    if (this !== draggedElement && this.classList.contains('key')) {
        this.classList.add('drag-over');
    }
    return false;
}

function handleDragLeave(e) {
    this.classList.remove('drag-over');
}

function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    
    if (draggedElement !== this && this.classList.contains('key')) {
        
        swapKeys(draggedElement, this);
    }
    
    this.classList.remove('drag-over');
    return false;
}

function handleDragEnd(e) {
    this.classList.remove('dragging');
    document.querySelectorAll('.key').forEach(key => {
        key.classList.remove('drag-over');
    });
    draggedElement = null;
    updateStatus('Key mapping updated!');
}



function swapKeys(element1, element2) {
    const code1 = element1.dataset.code;
    const code2 = element2.dataset.code;
    const key1 = element1.dataset.originalKey;
    const key2 = element2.dataset.originalKey;
    const width1 = element1.dataset.width;
    const width2 = element2.dataset.width;
    const type1 = element1.dataset.type;
    const type2 = element2.dataset.type;

    
    const currentTarget1 = keyMappings[code1] || code1;
    const currentTarget2 = keyMappings[code2] || code2;

    
    keyMappings[code1] = currentTarget2;
    keyMappings[code2] = currentTarget1;

    
    element1.dataset.originalKey = key2;
    element1.textContent = key2;
    element1.className = 'key';
    if (width2 !== 'normal') element1.classList.add(width2);
    if (type2 === 'special') element1.classList.add('special');

    element2.dataset.originalKey = key1;
    element2.textContent = key1;
    element2.className = 'key';
    if (width1 !== 'normal') element2.classList.add(width1);
    if (type1 === 'special') element2.classList.add('special');

    if (typeof updateMappingsInMain === 'function') {
        updateMappingsInMain();
    }
}



function updateStatus(message) {
    const status = document.getElementById('status');
    status.textContent = message;
    setTimeout(() => {
        status.textContent = '';
    }, 3000);
}


function resetKeyboard() {
    initKeyMappings();
    buildKeyboard();
    
    
    if (typeof updateMappingsInMain === 'function') {
        updateMappingsInMain();
    }
    
    updateStatus('Keyboard reset to default!');
}


function saveProfile() {
    const profile = {
        mappings: keyMappings,
        name: 'Profil ' + new Date().toLocaleDateString('tr-TR'),
        date: new Date().toISOString()
    };
    
    
    if (typeof require !== 'undefined') {
        const { ipcRenderer } = require('electron');
        ipcRenderer.send('save-profile', profile);
    } else {
        
        localStorage.setItem('keymapper-profile', JSON.stringify(profile));
    }
    
    updateStatus('Profile saved!');
}


function loadProfile() {
    let profileData = null;
    
    if (typeof require !== 'undefined') {
        const { ipcRenderer } = require('electron');
        ipcRenderer.send('load-profile');
ipcRenderer.on('profile-data', (event, data) => {
    if (data && data.mappings) {
        keyMappings = data.mappings;
        buildKeyboardFromMappings();
        
			
			ipcRenderer.send('update-mappings', data.mappings);
			
			updateStatus('Profile loaded: ' + (data.name || 'Saved Profile'));
		} else {
			updateStatus('No saved profile found!');
		}
	});
    } else {
        const saved = localStorage.getItem('keymapper-profile');
        if (saved) {
            profileData = JSON.parse(saved);
            applyProfile(profileData);
        }
    }
    
    if (!profileData) {
        updateStatus('No saved profile found!');
    }
}


function applyProfile(profile) {
    keyMappings = profile.mappings;
    buildKeyboardFromMappings();
    if (typeof updateMappingsInMain === 'function') {
        updateMappingsInMain();
    }
    updateStatus('Profile loaded: ' + (profile.name || 'Saved Profile'));
}


function buildKeyboardFromMappings() {
    const keyboard = document.getElementById('keyboard');
    keyboard.innerHTML = '';

    const mainWrapper = document.createElement('div');
    mainWrapper.className = 'keyboard-main-wrapper';

    const mainKeyboard = document.createElement('div');
    mainKeyboard.className = 'keyboard-main';

    keyboardLayout.forEach((row, rowIndex) => {
        const rowElement = document.createElement('div');
        rowElement.className = 'keyboard-row';

        row.forEach((keyData, keyIndex) => {
            if (keyData.spacer) {
                rowElement.appendChild(createSpacer('normal'));
                return;
            }

            if (keyIndex > 0 && row[keyIndex - 1].groupEnd) {
                rowElement.appendChild(createSpacer('group'));
            }
            
            if (keyIndex > 0 && row[keyIndex - 1].sectionEnd) {
                rowElement.appendChild(createSpacer('section'));
            }

            
            const mappedCode = keyMappings[keyData.code] || keyData.code;
            
            
            let mappedKey = keyData;
            const allLayouts = [...keyboardLayout, ...numpadLayout];
            for (let r of allLayouts) {
                for (let k of r) {
                    if (k.code === mappedCode && !k.spacer) {
                        mappedKey = k;
                        break;
                    }
                }
            }

            const keyElement = createKeyElement({
                ...keyData,
                key: mappedKey.key,
                code: keyData.code,
                originalKey: mappedKey.key
            });
            
            rowElement.appendChild(keyElement);
        });

        mainKeyboard.appendChild(rowElement);
    });

    
    const numpadKeyboard = document.createElement('div');
    numpadKeyboard.className = 'keyboard-numpad';

    const numpadTitle = document.createElement('div');
    numpadTitle.className = 'numpad-title';
    numpadTitle.textContent = 'NumPad';
    numpadKeyboard.appendChild(numpadTitle);

    numpadLayout.forEach((row, rowIndex) => {
        const rowElement = document.createElement('div');
        rowElement.className = 'keyboard-row numpad-row';

        row.forEach((keyData, keyIndex) => {
            if (keyData.spacer) {
                rowElement.appendChild(createSpacer('normal'));
                return;
            }

            const mappedCode = keyMappings[keyData.code] || keyData.code;
            let mappedKey = keyData;
            const allLayouts = [...keyboardLayout, ...numpadLayout];
            for (let r of allLayouts) {
                for (let k of r) {
                    if (k.code === mappedCode && !k.spacer) {
                        mappedKey = k;
                        break;
                    }
                }
            }

            const keyElement = createKeyElement({
                ...keyData,
                key: mappedKey.key,
                code: keyData.code,
                originalKey: mappedKey.key
            });
            
            rowElement.appendChild(keyElement);
        });

        numpadKeyboard.appendChild(rowElement);
    });

    mainWrapper.appendChild(mainKeyboard);
    mainWrapper.appendChild(numpadKeyboard);
    keyboard.appendChild(mainWrapper);
}


document.addEventListener('DOMContentLoaded', () => {
    initKeyMappings();
    buildKeyboard();
    
    document.getElementById('resetBtn').addEventListener('click', resetKeyboard);
    document.getElementById('saveBtn').addEventListener('click', saveProfile);
    document.getElementById('loadBtn').addEventListener('click', loadProfile);
	document.getElementById('menuSave').addEventListener('click', saveProfile);
document.getElementById('menuLoad').addEventListener('click', loadProfile);
document.getElementById('menuReset').addEventListener('click', resetKeyboard);
document.getElementById('menuExit').addEventListener('click', () => {
    if (typeof require !== 'undefined') {
        const { ipcRenderer } = require('electron');
        ipcRenderer.send('app-quit');
    }
});

document.getElementById('menuAbout').addEventListener('click', () => {
    alert('Easy KeyMapper v1.0\n\n' +
          'Drag & drop keyboard remapper optimized for gaming.\n\n' +
          '• No registry changes — all remapping is temporary\n' +
          '• Keyboard resets to default on exit\n' +
          '• Not suitable for text input (dual key signals)\n\n' +
          'Author: GameSome - mabaci - 2026\n' +
          'License: GPL 3.0');
});
});