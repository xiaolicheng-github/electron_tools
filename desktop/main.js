const { app, BrowserWindow } = require("electron");
const path = require("node:path");
const { spawn } = require("child_process");

// 启动子进程
let expressServerProcess = null;

const createWindow = (port) => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });
  // win.loadFile('./dist/index.html');
  win.loadURL(`http://127.0.0.1:${port}`);
};

app.whenReady().then(() => {
  // 监听子进程的输出
  expressServerProcess = spawn("node", ["server.js"])
  expressServerProcess.stdout.on("data", (data) => {
    const str = (data || '').toString().trim();
    const port = str.replace('port=', '')
    if(!!port) {
      createWindow(port);
    }
  });

  // app.on("activate", () => {
  //   if (BrowserWindow.getAllWindows().length === 0) {
  //     createWindow();
  //   }
  // });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
