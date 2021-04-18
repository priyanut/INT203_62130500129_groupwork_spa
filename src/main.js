import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import BaseAddProduct from './components/BaseAddProduct'

const app = createApp(App)
app.component('base-add-product', BaseAddProduct)
app.use(router).mount('#app')