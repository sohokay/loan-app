import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
// import MyLayout from "@/views/layout";
const app=createApp(App)

app.use(store)
app.use(router)
app.use(Vant)
// app.component('MyLayout',MyLayout)
app.mount('#app')
