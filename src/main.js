import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

import router from '../src/router/routes'

import axios from 'axios'
//把axios挂载到Vue上
Vue.prototype.$axios = axios

// echarts引入
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

Vue.use(ElementUI);
//接口请求的前缀地址，地址还没写
axios.defaults.baseURL = 'http://127.0.0.1:4523/m1/2218851-0-default'
//全局设置token
axios.interceptors.request.use(function(config){
  let token = sessionStorage.getItem('token')
  if(token) {
    config.headers['token'] = token
  }
  return config
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
