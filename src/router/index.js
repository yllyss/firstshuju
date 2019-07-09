/*
* 路由器对象
* */
import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../pages/login.vue'

import home from '../pages/home.vue'
import datasource from '../pages/datasource.vue'
import template from '../pages/template.vue'
import templateedit from '../pages/templateedit.vue'
import templateshow from '../pages/templateshow.vue'

Vue.use(VueRouter)//声明使用vue插件
export default new VueRouter({
  mode:'history',//去掉了路由的#号
  routes:[
    {
      path:'*',
      component:home
    },
    // {
    //   path:'/login',
    //   component:login
    // },
    {
      path:'/home',
      name:'home',
      component:home,
      children:[
        {
          path:'datasource',
          name:'datasource',
          component:datasource
        },
        {
          path:'template',
          name:'template',
          component:template,
          props:(router) => ({id:router.query.id}),
        },
        {
          path:'templateshow/',
          name:'templateshow',
          component:templateshow
        },
        {
          path:'templateedit',
          name:'templateedit',
          component:templateedit
        },
      ]
    },
    {
      path: "/",   //主路由重定向至home组件
      redirect: "/home"
    }
  ]
})
