import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('api', {
  send: (channel: string, data: unknown) => ipcRenderer.send(channel, data),
  receive: (channel: string, callback: (...args: unknown[]) => void) =>
    ipcRenderer.on(channel, (event, ...args) => callback(...args)),
  invoke: (channel: string, data: unknown) => ipcRenderer.invoke(channel, data),
});
