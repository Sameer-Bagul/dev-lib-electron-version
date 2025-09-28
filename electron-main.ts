import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';

let mainWindow: BrowserWindow | null = null;
let focusedWindow: BrowserWindow | null = null;
let focusedData: { content: string; theme: string } | null = null;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // Optional, use preload.ts if needed
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:5173'); // Vite dev server
  } else {
    mainWindow.loadFile(path.join(__dirname, 'dist/index.html')); // Built files
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

const createFocusedWindow = () => {
  focusedWindow = new BrowserWindow({
    width: 900,
    height: 700,
    center: true,
    frame: false,
    resizable: true,
    minimizable: true,
    maximizable: true,
    alwaysOnTop: false,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  if (process.env.NODE_ENV === 'development') {
    focusedWindow.loadURL('http://localhost:5173#focused'); // Vite dev server with hash
  } else {
    focusedWindow.loadFile(path.join(__dirname, 'dist/index.html'), { hash: 'focused' }); // Built files with hash
  }

  focusedWindow.once('ready-to-show', () => {
    focusedWindow?.show();
  });

  focusedWindow.on('closed', () => {
    focusedWindow = null;
    focusedData = null;
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// IPC handlers for focused window
ipcMain.handle('open-focused-window', async (event, data: { path: string; content: string; theme: string }) => {
  focusedData = data;
  if (focusedWindow && !focusedWindow.isDestroyed()) {
    focusedWindow.focus();
  } else {
    createFocusedWindow();
  }
});

ipcMain.handle('get-focused-data', async () => {
  return focusedData;
});
