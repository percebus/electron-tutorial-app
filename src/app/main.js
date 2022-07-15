(() => {
  'use strict'

  console.info('main.js: loading...')

  const { app, BrowserWindow } = require('electron')
  const path = require('path')

  const menu = require('./components/examples/menu/main')
  const darkMode = require('./components/examples/dark-mode/main')
  const notification = require('./components/examples/notification2/main')

  menu.setup()

  const newBrowserWindow = () => {
    console.log('newBrowserWindow()')

    const oBrowserWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js')
      }
    })

    const htmlPlatformPath = path.join(__dirname, 'index.html')
    oBrowserWindow.loadFile(htmlPlatformPath)

    // Open the DevTools.
    // oBrowserWindow.webContents.openDevTools()

    darkMode.setup()
  }

  app
    .whenReady()
    .then(newBrowserWindow)
    .then(() => {
      const oNotification = notification.create({
        title: 'main.js Notification',
        body: 'examples/notification2/main.js'
      })

      oNotification.show()
    })

  app.on('activate', () => {
    console.log('app.on("activate")')

    /* On macOS it's common to re-create a window in the app
     * when the dock icon is clicked and there are no other windows open.
     */
    const allWindows = BrowserWindow.getAllWindows()
    if (!allWindows.length) {
      newBrowserWindow()
    }
  })

  app.on('window-all-closed', () => {
    console.log('app.on("window-all-closed")')

    /* Quit when all windows are closed, except on macOS.
     *
     * There, it's common for applications and their menu bar to stay active
     * until the user quits explicitly with Cmd + Q.
     */

    console.debug('process.platform', process.platform)
    switch (process.platform) {
      case 'darwin':
        console.debug('macOS detected, skipping...')
        return

      default:
        app.quit()
    }
  })

  /* In this file you can include the rest of your app's specific main process code.
   * You can also put them in separate files and require them here.
   */
})()
