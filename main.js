import App from './App'
// HBuilder X创建的项目默认集成了 Pinia，不需要手动安装
import * as Pinia from 'pinia'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
	app.use(Pinia.createPinia())
  return {
    app,
		Pinia
  }
}
// #endif