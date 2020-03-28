const { app, BrowserWindow } = require('electron');
const serve = require('electron-serve');

const loadURL = serve({ directory: 'build' });

let mainWindow;

const { default: installExtension, REDUX_DEVTOOLS } = require('electron-devtools-installer');

(async () => {
  await app.whenReady();

  installExtension(REDUX_DEVTOOLS)
    .then(name => console.log(`Added Extension:  ${name}`))
    .catch(err => console.log('An error occurred: ', err));

  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      devTools: true,
      webSecurity: false
    },
    show: false
  });

  mainWindow.removeMenu();
  // mainWindow.webContents.openDevTools();
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  mainWindow.maximize();

  await loadURL(mainWindow);
  // mainWindow.loadURL('http://localhost:3000');

  mainWindow.show();
})();

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
