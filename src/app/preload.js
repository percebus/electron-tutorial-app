(() => {
  'use strict'

  const versions = require('./components/examples/versions/preload')
  const darkMode = require('./components/examples/dark-mode/preload')

  console.info('preload.js: loading...')

  /* All of the Node.js APIs are available in the preload process.
 * It has the same sandbox as a Chrome extension.
 */

  versions.setup()
  darkMode.setup()
})()
