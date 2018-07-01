import Vue from 'vue'
import Router from 'vue-router'
import "@babel/polyfill"
import App from './App.vue'
import route from './router'
import store from './store'
import ElementUI from 'element-ui'
import { i18n } from '@/i18n'
import resource from 'vue-resource'
import 'vue2-toast/lib/toast.css'
import Toast from 'vue2-toast'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Toast, {
  defaultType: 'center',
  duration: 1500,
  wordWrap: false,
  width: 'auto'
})

window.version = '0.0.1'

import mixins from './mixins'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(resource)
Vue.mixin(mixins)


Date.prototype.format = function(fmt) {
  var o = {
     "M+" : this.getMonth()+1,                 //月份
     "d+" : this.getDate(),                    //日
     "h+" : this.getHours(),                   //小时
     "m+" : this.getMinutes(),                 //分
     "s+" : this.getSeconds(),                 //秒
     "q+" : Math.floor((this.getMonth()+3)/3), //季度
     "S"  : this.getMilliseconds()             //毫秒
 };
 if(/(y+)/.test(fmt)) {
         fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length))
 }
  for(var k in o) {
     if(new RegExp("("+ k +")").test(fmt)){
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)))
      }
  }
 return fmt 
}

const router = new Router({
  mode: 'history',
  routes: route,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
Vue.use(Router)


new Vue({
  i18n,
  store,
  router,
  render: h => h(App)
}).$mount('#app')