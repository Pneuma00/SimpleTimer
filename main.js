const { app, BrowserWindow } = require('electron')

app.on('ready', () => {
    const win = new BrowserWindow({
        width: 400,
        height: 200,
        alwaysOnTop: true,
        resizable: false,
        maximizable: false,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('./index.html')
})

