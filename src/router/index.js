import Vue from 'vue'
import VueRouter from 'vue-router'

import User from '../view/user/index'
import UserHome from '../view/user/UserHome'
import UserInfo from '../view/user/UserInfo'

Vue.use(VueRouter)

const routes = [    
 // 用户界面
 {
    path: '/user',
    component: User,
    children: [
        // 子路由
        {path: 'home',name: 'home',component: UserHome},//首页
        {path: 'info',name: 'info', component: UserInfo},//用户信息
        // { path: '', name: 'home', component: Home },
        // { path: 'user', name: 'user', component: User },
        // { path: 'mall', name: 'mall', component: Mall },// 商品管理
        // { path: 'page1', name: 'page1', component: Page1 },
        // { path: 'page2', name: 'page2', component: Page2 },
    ],

},

]

// 创建一个router实例，将定义的路由放进去
const router = new VueRouter({
    routes,
    mode: 'history'
})
export default router
