import { createApp } from 'vue'
import App from './App.vue'
import routers from '@/router'

import './assets/sass/main.sass'
import './assets/css/normalize.css'
import './assets/fonts/Montserrat-VariableFont_wght.ttf'
import './assets/fonts/Montserrat-Medium.ttf'

const app = createApp(App)
app.use(routers)
app.mount('#app')
