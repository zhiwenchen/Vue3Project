
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'virtual:windi.css'
import store from './store'

const app = createApp(App)

app.use(ElementPlus)    
// 要先调用use store再调用use router
app.use(store)
app.use(router)
import './permission'
app.mount('#app')
