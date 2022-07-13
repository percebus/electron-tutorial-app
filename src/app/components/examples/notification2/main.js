(() => {
  'use strict'

  console.info('examples/menu/main.js: loading...')

  const { Notification } = require('electron')

  function newNotification (options) {
    console.log('examples/notification2/main newNotification()')
    return new Notification(options)
  }

  exports.create = newNotification
})()
