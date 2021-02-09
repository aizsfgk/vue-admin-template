// 全局引入Vue
import Vue from 'vue'
// 引入css
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
// 引入element-ui
import ElementUI from 'element-ui'
// 引入主题css
import 'element-ui/lib/theme-chalk/index.css'

// 国际化
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

// 全局css
import '@/styles/index.scss' // global css


// 导入APP
import App from './App'
// 导入存储
import store from './store'
// 导入路由
import router from './router'

// 导入图标
import '@/icons' // icon
// 
import '@/permission' // permission control

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

// set ElementUI lang to EN
// 最小成本使用
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
