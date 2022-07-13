(() => {
  'use strict'
  const { contextBridge, ipcRenderer } = require('electron')

  function setup () {
    contextBridge.exposeInMainWorld('darkMode', {
      toggle: () => ipcRenderer.invoke('dark-mode:toggle'),
      system: () => ipcRenderer.invoke('dark-mode:system')
    })
  }

  exports.setup = setup
})()
