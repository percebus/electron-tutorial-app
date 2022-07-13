(() => {
  'use strict'

  console.info('examples/dark-mode/preload.js: loading...')

  const { contextBridge, ipcRenderer } = require('electron')

  function setup () {
    console.log('examples/dark-mode/preload setup()...')
    contextBridge.exposeInMainWorld('darkMode', {
      toggle: () => ipcRenderer.invoke('dark-mode:toggle'),
      system: () => ipcRenderer.invoke('dark-mode:system')
    })
  }

  exports.setup = setup
})()
