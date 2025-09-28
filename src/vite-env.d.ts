/// <reference types="vite/client" />

declare global {
  interface Window {
    api: {
      send: (channel: string, data: unknown) => void;
      receive: (channel: string, callback: (...args: unknown[]) => void) => void;
      invoke: (channel: string, data?: unknown) => Promise<unknown>;
    };
  }
}
