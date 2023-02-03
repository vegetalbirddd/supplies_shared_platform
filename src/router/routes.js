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
import NeedDetails from '../view/user/NeedDetails'
//管理员
import Admin from '../view/admin/index'
import AdminHome from '../view/admin/home'
import AdminInfo from '../view/admin/info' //这里是用户的信息
import AdminInfoDetail from '../view/admin/infoDetail'
import AdminSupplies from '../view/admin/supplies'
import AdminSupDetail from '../view/admin/supDetail'
import AdminNeed from '../view/admin/need'
import AdminNeedDetail from '../view/admin/needDetail'

import region from '../components/region'
//改变原型链的push方法来解决路由访问重复的报错问题
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [    
// 默认进入为登录页面
{
    path: '/',
    meta: { title: '登录' },
    component: Login,
    
},
// 登录页面
{
    path: '/login',
    name: 'login',
    meta: { title: '登录' },
    component: Login
},
// 注册页面
{
    path: '/signUp',
    name: 'signup',
    meta: { title: '注册' },
    component: SignUp
},
 // 用户界面
 {
    path: '/user',
    component: User,
    meta: { title: '用户首页' },
    children: [
        // 子路由
        {path: '',meta: { title: '用户首页' },component: UserHome},//首页
        {path: 'home',name: 'home',meta: { title: '用户首页' },component: UserHome},//首页
        {path: 'need',name: 'need',meta: { title: '需求页面' },component: UserNeed},//需求页面
        {path: 'supplies',name: 'supplies',meta: { title: '物资浏览' },component: UserSupplies},//物资浏览
        {path: 'release',name: 'release',meta: { title: '发布需求' },component: UserRelease},//发布需求
        {path: 'release2',name: 'release2',meta: { title: '发布物资' },component: UserRelease2},//发布物资
        {path: 'info',name: 'info',meta: { title: '个人信息' },component: UserInfo},//个人信息
        {path: 'supdetails',name: 'supdetails',meta: { title: '物资详情' },component: SupDetails},//物资详情页面
        {path: 'needdetails',name: 'needdetails',meta: { title: '需求详情' },component: NeedDetails},//需求详情页
    ],
},
 // 管理员界面
 {
    path: '/admin',
    component: Admin,
    meta: { title: '主页' },
    children: [
        // 子路由
        {path: '',meta: { title: '管理首页' },component: AdminHome},//首页
        {path: 'home',name: 'aHome',meta: { title: '管理首页' },component: AdminHome},//首页
        {path: 'info',name: 'aInfo',meta: { title: '用户信息' },component: AdminInfo},
        {path: 'infoDetail',name: 'aInfoD',meta: { title: '用户信息详情' },component: AdminInfoDetail},//用户信息详情
        {path: 'sup',name: 'aSup',meta: { title: '已发布物资' },component: AdminSupplies},
        {path: 'supDetail',name: 'aSupD',meta: { title: '物资详情'},component: AdminSupDetail},
        {path: 'need',name: 'aNeed',meta: { title: '已发布需求' },component: AdminNeed},
        {path: 'needDetail',name: 'aNeedD',meta: {title: '需求详情'},component: AdminNeedDetail}
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
//     }else if(to.path == '/signUp'){
//         return next()
//     }
//     //校验token
//     const tokenStr = sessionStorage.getItem('token')
    
//     if(!tokenStr) {
//         return next('/login')
//     }else {
//         next()
//     }
//     window.document.title = to.meta.title || '疫情物资共享平台'

// })


router.afterEach((to,from,next)=>{
    window.scrollTo(0,0)
  })//跳转后自动返回顶部

export default router
