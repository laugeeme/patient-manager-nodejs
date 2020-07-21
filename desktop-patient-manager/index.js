'use strict';

const { app, BrowserWindow } = require('electron');

let appWindow;

function createWindow() {
  appWindow = new BrowserWindow({
    width: 1400,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    center: true,
    show: false,
    icon: 'icon.png'
  });

  //When app is closed:
  appWindow.on('closed', () => {
    appWindow = null;
  });

  //Load HTML
  appWindow.loadFile('./index.html');

  //When app is ready shows window
  appWindow.once('ready-to-show', () => {
    appWindow.show();
  });
}

app.on('ready', createWindow);
