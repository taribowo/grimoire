const { app, BrowserWindow, Menu, dialog } = require('electron');
const path = require('path');

let win;

let openMenuOptions = {
  title: 'Open Directory',
  // defaultPath: '/home/aribowo/Pictures',
  buttonLabel: 'Open',
  // filters: [{ name: 'Images', extensions: ['jpg', 'png', 'gif'] }],
  properties: ['openDirectory']
};

const template = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Open',
        click: () =>
          dialog.showOpenDialog(win, openMenuOptions, filePaths => {
            // image.appendImages(filePaths[0]);
            console.log(filePaths);
          })
      }
    ]
  }
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      devTools: true
    }
  });

  // win.removeMenu();

  // win.maximize();

  win.loadFile(path.resolve(__dirname, 'build/index.html'));

  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });
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
