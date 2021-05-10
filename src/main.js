import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
/*new Vue({
  //el: '#app',
  router,
  components: { App },
  //template: '<App/>'
})*/


import {get , post} from './plugins/axios.js'
import './plugins/vant.js'
import './assets/css/base.css'

Vue.prototype.$get = get
Vue.prototype.$post = post

import VConsole from 'vconsole'// 引入
new VConsole() // 初始化
