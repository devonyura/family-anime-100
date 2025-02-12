const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const path = require("path");

let mainWindow;
let ENV = 'production';
// let ENV = 'development';

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    fullscreen: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
    icon: path.join(__dirname, "assets","favicon.ico")
  });


  // Load React build output atau localhost saat development
  // const startURL =
  //   ENV === "production"
  //     ? `file://${__dirname}/build/index.html`
  //     : "http://localhost:3000";

  // mainWindow.loadURL(startURL);
  mainWindow.loadFile(path.join(__dirname, "build", "index.html"));

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (mainWindow === null) createWindow();
});

ipcMain.on("close-app", () => {
  app.quit();
});
