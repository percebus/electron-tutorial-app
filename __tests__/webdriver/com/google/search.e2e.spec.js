(() => {
  'use strict'
  const webdriver = require('selenium-webdriver')
  const driver = new webdriver
    .Builder()
    .usingServer('http://localhost:9515')// The "9515" is the port opened by ChromeDriver.
    .withCapabilities({
      'goog:chromeOptions': {
        binary: './node_modules/.bin/electron'
      }
    })
    .forBrowser('chrome') // note: use .forBrowser('electron') for selenium-webdriver <= 3.6.0
    .build()

  driver.get('http://www.google.com')
  driver.findElement(webdriver.By.name('q')).sendKeys('webdriver')
  driver.findElement(webdriver.By.name('btnG')).click()
  driver.wait(
    () => {
      return driver.getTitle().then((title) => {
        return title === 'webdriver - Google Search'
      })
    },
    1000)

  driver.quit()
})()
