(() => {
  'usen strict'

  console.info('render.js: loading...')

  function setupDarkColors () {
    document
      .getElementById('toggle-dark-mode')
      .addEventListener('click', async () => {
        const isDarkMode = await window.darkMode.toggle()
        document.getElementById('theme-source').innerHTML = isDarkMode ? 'Dark' : 'Light'
      })

    document
      .getElementById('reset-to-system')
      .addEventListener('click', async () => {
        await window.darkMode.system()
        document.getElementById('theme-source').innerHTML = 'System'
      })
  }

  function setupNotification () { // notification
    const oNotification = new Notification(
      'Title', {
        body: 'Notification from the Renderer process. Click to log to console.'
      }
    )

    oNotification.onclick = () => {
      console.log('notification.click()')
      const msg = 'Notification clicked!'
      document.getElementById('output').innerText = msg
    }
  }

  setupDarkColors()
  setupNotification()
})()
