import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      getVersion: () => string
      ping: () => Promise<string>
    }
  }
}
