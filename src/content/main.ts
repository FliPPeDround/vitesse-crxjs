import { createApp } from 'vue'
import { setupApp } from '~/logic/common-setup'
import App from './views/App.vue'

/**
 * Mount the Vue app to the DOM.
 */
function mountApp() {
  const container = document.createElement('div')
  container.id = __NAME__
  document.body.appendChild(container)
  const app = createApp(App)
  setupApp(app)
  app.mount(container)
}

mountApp()
