const versions = require('./examples/versions/preload')
const darkMode = require('./examples/darkMode/preload')

console.info('preload.js: loading...')

/* All of the Node.js APIs are available in the preload process.
 * It has the same sandbox as a Chrome extension.
 */

versions.setup()
darkMode.setup()
