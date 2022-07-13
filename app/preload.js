const { contextBridge, ipcRenderer } = require('electron')

console.info('preload.js: loading...')

/* All of the Node.js APIs are available in the preload process.
 * It has the same sandbox as a Chrome extension.
 */
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) {
      element.innerText = text
    }
  }

  for (const dependency of ['chrome', 'node', 'electron']) {
    const version = process.versions[dependency]
    replaceText(`${dependency}-version`, version)
  }
})

contextBridge.exposeInMainWorld('darkMode', {
  toggle: () => ipcRenderer.invoke('dark-mode:toggle'),
  system: () => ipcRenderer.invoke('dark-mode:system')
})
