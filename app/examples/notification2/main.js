(() => {
  'use strict'

  const { Notification } = require('electron')

  console.info('examples/menu/main.js: loading...')

  function newNotification () {
    console.log('examples/notification2/main newNotification()')

    return new Notification({
      title: 'main.js Notification',
      body: 'examples/notification2/main.js'
    })
  }

  exports.create = newNotification
})()
