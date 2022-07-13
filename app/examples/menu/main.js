(() => {
  'use strict'

  const { Menu, MenuItem } = require('electron')

  let accelerator
  switch (process.platform) {
    case 'darwin':
      accelerator = 'Alt+Cmd+I'
      break

    default:
      accelerator = 'Alt+Shift+I'
      break
  }

  const oMenuItem = new MenuItem({
    label: 'Custom Menu',
    submenu: [
      {
        role: 'help',
        accelerator,
        click: () => {
          console.log('click')
        }
      }
    ]
  })

  const oMenu = new Menu()
  oMenu.append(oMenuItem)
  exports.menu = oMenu
})()
