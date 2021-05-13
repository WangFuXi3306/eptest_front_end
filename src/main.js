import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import ElementUi from 'element-ui';
import {get , post} from './plugins/axios.js'
import './plugins/vant.js'
import './assets/css/base.css'
import './assets/css/advance.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.$get = get
Vue.prototype.$post = post

import VConsole from 'vconsole'// 引入
new VConsole() // 初始化

Vue.use(Vant);
Vue.use(ElementUi);

Vue.config.productionTip = false

Vue.prototype.setCookie = function(c_name,value,expiredays) {
  let exdate=new Date()
  exdate.setDate(exdate.getDate()+expiredays)
  document.cookie=c_name+ "=" +escape(value)+
      ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
};

Vue.prototype.getCookie=function(c_name) {
  if (document.cookie.length>0)
  {
    let  c_start=document.cookie.indexOf(c_name + "=")
    if (c_start!=-1)
    {
      c_start=c_start + c_name.length+1
      let c_end=document.cookie.indexOf(";",c_start)
      if (c_end==-1) c_end=document.cookie.length
      return unescape(document.cookie.substring(c_start,c_end))
    }
  }
  return ""
};

new Vue({
  render: h => h(App),
  router
}).$mount('#app')



