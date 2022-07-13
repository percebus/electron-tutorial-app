(() => {
  'use strict'

  console.info('examples/dark-mode/main.js: loading...')

  const { ipcMain, nativeTheme } = require('electron')

  function setup () {
    console.log('examples/dark-mode/main setup()...')

    ipcMain.handle('dark-mode:toggle', () => {
      if (nativeTheme.shouldUseDarkColors) {
        nativeTheme.themeSource = 'light'
      } else {
        nativeTheme.themeSource = 'dark'
      }

      return nativeTheme.shouldUseDarkColors
    })

    ipcMain.handle('dark-mode:system', () => {
      nativeTheme.themeSource = 'system'
    })
  }

  exports.setup = setup
})()
