import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import tools from './plugins/tools'
import api from './plugins/api'

const app = createApp(App)

app.use(router)

app.use(tools)
app.use(api)

app.mount('#app')
