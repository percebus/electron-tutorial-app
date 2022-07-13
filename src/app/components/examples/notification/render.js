
const oNotification = new Notification(
  'render.js Notification', {
    body: 'examples/notification/render.js: Click to log to console.'
  })

oNotification.onclick = () => {
  console.log('notification.click()')
  const msg = 'Notification clicked!'
  document.getElementById('output').innerText = msg
}
