
const { ipcRenderer } = require('electron');


ipcRenderer.on('status-update', (event, message) => {
    updateStatus(message);
});


ipcRenderer.on('profile-saved', (event, success) => {
    if (success) updateStatus('Profile saved!');
});


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


ipcRenderer.on('reset-to-default', () => {
    initKeyMappings();
    buildKeyboard();
    if (typeof updateMappingsInMain === 'function') {
        updateMappingsInMain();
    }
    updateStatus('Exit - keyboard reset to default');
});


document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        ipcRenderer.send('get-stored-mappings');
    }, 300);
});


function updateMappingsInMain() {
    ipcRenderer.send('update-mappings', keyMappings);
}