/* 路由 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/* 
解决NavigationDuplicated: Avoided redundant navigation to current location: 问题;
翻译之后就是 ：navigationduplicate:避免到当前位置的冗余导航:"/"
原因是因为 ：是指路由重复。虽然对项目无影响，但是看到有红的不舒服！
解决：打开router文件夹下的index.js文件中添加如下代码：
*/
// 获取原型对象的push函数
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
/// 如果修改了push还是没有生效，那么可以尝试replace方法，例如：ok
/* const originalPush = VueRouter.prototype.replace
VueRouter.prototype.push = function replace(location) {
  return originalPush.call(this, location).catch(err => err)
} */


/// 一层对应一个装载容器 <router-view></router-view>，第一层(即最外层的 布局组件Main、Login 对应 App.vue里的容器)
const routes = [
    {
        path: '/', // 布局组件的 path值为 '/main' 不影响子项的路径配置
        name: 'Main',
        component: () => import('../views/Main.vue'),
        redirect: '/home',
        children: [
            {
                path: '/home', // 如果这里加了一级路径，'/main/home'，菜单里也要改成一样的值，path: "/main/home",
                name: 'home',
                component: () => import('../views/home')
            },
            {
                path: '/user',
                name: 'user',
                component: () => import('../views/user')
            },
            {
                path: '/mall',
                name: 'mall',
                component: () => import('../views/mall')
            },
            {
                path: '/page1',
                name: 'page1',
                component: () => import('../views/other/pageOne')
            },
            {
                path: '/page2',
                name: 'page2',
                component: () => import('../views/other/pageTwo')
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
