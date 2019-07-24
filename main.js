const { app, BrowserWindow } = require('electron');
const path = require('path');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      devTools: true
    },
    show: false
  });

  win.loadFile(path.resolve(__dirname, 'build/index.html'));

  win.removeMenu();

  // win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });

  win.maximize();
  win.show();
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
