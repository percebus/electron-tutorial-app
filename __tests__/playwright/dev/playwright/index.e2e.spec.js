(() => {
  'use strict'

  const { test, expect } = require('@playwright/test')

  test.describe('playwright.dev', () => {
    test.beforeEach(async ({ page }) => {
      // Go to the starting url before each test.
      await page.goto('https://playwright.dev/')
    })

    test('title', async ({ page }) => {
      const title = page.locator('.navbar__inner .navbar__title')
      await expect(title).toHaveText('Playwright')
    })

    test('Get Started', async ({ page }) => {
      // Expect a title "to contain" a substring.
      await expect(page).toHaveTitle(/Playwright/)

      // Expect an attribute "to be strictly equal" to the value.
      await expect(page.locator('text=Get Started').first()).toHaveAttribute('href', '/docs/intro')

      await page.click('text=Get Started')
      // Expect some text to be visible on the page.
      await expect(page.locator('text=Introduction').first()).toBeVisible()
    })
  })
})()
