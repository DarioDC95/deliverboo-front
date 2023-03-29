import { createApp } from 'vue'
import App from './App.vue'
import "/node_modules/bootstrap/dist/css/bootstrap.css"
import * as bootstrap from 'bootstrap'
import { router } from './router.js'

createApp(App).use(router).mount('#app')