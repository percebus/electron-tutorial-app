(() => {
  'use strict'
  const { _electron: electron } = require('playwright')
  const { test, expect } = require('@playwright/test')

  test.describe('electron app', () => {
    let electronApp
    test.beforeEach(async () => {
      // This runs in Electron's main process, parameter here is always
      // the result of the require('electron') in the main app script.
      electronApp = await electron.launch({ args: ['build/main.js'] })
    })

    test.afterEach(async () => {
      await electronApp.close()
    })

    test('isPackaged:false', async () => {
      const isPackaged = await electronApp.evaluate(async ({ app }) => {
        return app.isPackaged
      })

      expect(isPackaged).toBe(false) // (because we're in development mode)
    })

    test('firstWindow', async () => {
      const window = await electronApp.firstWindow()
      await window.screenshot({ path: 'tests/screenshots/firstWindow.png' })
    })
  })
})()
