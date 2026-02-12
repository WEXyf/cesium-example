import { createApp } from 'vue'
import router from './router/router.js'
import 'cesium/Build/Cesium/Widgets/widgets.css';
import App from './App.vue'

createApp(App).use(router).mount('#app')
