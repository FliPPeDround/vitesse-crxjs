import { createApp } from 'vue'
import { setupApp } from '~/logic/common-setup'
import App from './Sidepanel.vue'

const app = createApp(App)
setupApp(app)
app.mount('#app')
