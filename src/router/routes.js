import Vue from 'vue'
import VueRouter from 'vue-router'

// 登录注册
import Login from '../view/common/Login'
import SignUp from '../view/common/SignUp'
// 用户
import User from '../view/user/index'
import UserHome from '../view/user/UserHome'
import UserInfo from '../view/user/UserInfo'
import UserNeed from '../view/user/UserNeed'
import UserSupplies from '../view/user/UserSupplies'
import UserRelease from '../view/user/UserRelease'
import UserRelease2 from '../view/user/UserRelease2'
import SupDetails from '../view/user/SupDetails'
import NeedDetails from '../view/user/NeedDetails';

import region from '../components/region'

Vue.use(VueRouter)

const routes = [    
// 默认进入为登录页面
{
    path: '/',
    component: Login
},
// 登录页面
{
    path: '/login',
    name: 'login',
    component: Login
},
// 注册页面
{
    path: '/signUp',
    name: 'signup',
    component: SignUp
},
 // 用户界面
 {
    path: '/user',
    name:"user",
    component: User,
    children: [
        // 子路由
        {path: '',component: UserHome},//首页
        {path: 'home',name: 'home',component: UserHome},//首页
        {path: 'need',name: 'need',component: UserNeed},//需求页面
        {path: 'supplies',name: 'supplies',component: UserSupplies},//物资浏览
        {path: 'release',name: 'release',component: UserRelease},//发布需求
        {path: 'release2',name: 'release2',component: UserRelease2},//发布物资
        {path: 'info',name: 'info',component: UserInfo},//个人信息
        {path: 'supdetails',name: 'supdetails',component: SupDetails},//物资详情页面
        {path: 'needdetails',name: 'needdetails',component: NeedDetails},//需求详情页
    ],

},
// 组件测试
{
    path: '/region',
    component: region
},

]

// 创建一个router实例，将定义的路由放进去
const router = new VueRouter({
    routes,
    mode: 'history'
})

// 挂载路由导航守卫
// router.beforeEach((to, from, next) => {
//     //放行登录页面
//     if(to.path == '/login') {
//         return next()
//     }
//     //校验token
//     const tokenStr = sessionStorage.getItem('token')
    
//     if(!tokenStr) {
//         return next('/login')
//     }else {
//         next()
//     }
// })


router.afterEach((to,from,next)=>{
    window.scrollTo(0,0)
  })//跳转后自动返回顶部

export default router
