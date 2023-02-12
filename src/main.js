/*
 * @Author: Ayun
 * @Date: 2023-02-11 20:40:04
 * @LastEditTime: 2023-02-11 20:43:12
 * @FilePath: \supplies_shared_platform-main\supplies_shared_platform\src\main.js
 * @Ayun: Practice make perfect
 */
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

import htmlToPdf from '../src/utils/htmlToPdf'
// 使用Vue.use()方法就会调用工具方法中的install方法
Vue.use(htmlToPdf)

Vue.config.productionTip = false

Vue.use(ElementUI);
//接口请求的前缀地址(模拟)
axios.defaults.baseURL = 'http://localhost:8081'
axios.defaults.withCredentials = true
//全局设置token
axios.interceptors.request.use(function (config) {
  let token = sessionStorage.getItem('token')
  if (token) {
    config.headers['token'] = token
  }
  return config
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
