process.env.PORT = '3456';

const { app, BrowserWindow } = require("electron");
const { fork } = require('child_process');
const path = require("path");

let expressProcess = null;

const createWindow = () => {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });
  // win.loadFile('./dist/index.html');
  win.loadURL(`http://127.0.0.1:${process.env.PORT}`);

  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });

};

app.whenReady().then(() => {
  createWindow();

  const expressAppPath = path.join(__dirname, 'server.js');
  expressProcess = fork(expressAppPath);

});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
