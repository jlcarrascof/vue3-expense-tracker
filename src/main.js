import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import "@fortawesome/fontawesome-free/css/all.css"
import Toast from "vue-toastification"
import "vue-toastification/dist/index.css"

const app = createApp(App)
app.use(router)
app.use(Toast, {
    transition: "Vue-Toastification__fade",
    position: "bottom-left",
    timeout: 3000,
})
app.mount('#app')
