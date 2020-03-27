const { app, BrowserWindow } = require('electron');
const serve = require('electron-serve');

const loadURL = serve({ directory: 'build' });

let mainWindow;

(async () => {
  await app.whenReady();

  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      devTools: true
    },
    show: false
  });

  mainWindow.removeMenu();
  mainWindow.webContents.openDevTools();
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  mainWindow.maximize();

  await loadURL(mainWindow);

  mainWindow.show();
})();

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
