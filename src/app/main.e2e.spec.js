(() => {
  'use strict'
  const { _electron: electron } = require('playwright')
  const { test, expect } = require('@playwright/test')

  test.describe('app.isPackaged', () => {
    test('get isPackaged', async () => {
      const electronApp = await electron.launch({ args: ['main.js'] })
      const isPackaged = await electronApp.evaluate(async ({ app }) => {
        // This runs in Electron's main process, parameter here is always
        // the result of the require('electron') in the main app script.
        return app.isPackaged
      })

      console.log(isPackaged) // false (because we're in development mode)
      // close app
      await electronApp.close()
      expect(true, true)
    })
  })
})()
