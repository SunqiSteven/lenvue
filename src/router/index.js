import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Button from '@/components/Button'
import Home from '@/components/Home'
import Member from '@/components/Member'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Physical from '@/components/Physical'
import Notfound from '@/components/Notfound'
import Main from  '@/components/Main'
import Login from '@/components/Login'
import Coupon from '@/components/Coupon'
Vue.use(Router)
// Vue.component('Header',Header)
// Vue.component('Button',Button)

var router =  new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: Main,
      children:[
           {path:'home',name:'首页',component:Home}
      ]
    },
    {
      path: '/member',
      component: Main,  
      children:[
          {path:'',component:Member,name:'会员中心'}
      ]
    },
    {
      path: '/physical',
      component:Main,
      children:[
         {path:'',component:Physical,name:'体检'}
      ]
    },
    {
      path:'/coupon',
      component:Main,
      children:[
          {path:'',component:Coupon,name:'礼券'}
      ]
    },
    {
      path:'/login',
      component:Login,
      name:'登录'
    },
    {
      path: '*',
      name: '404',
      component: Notfound
    }
  ]
})

router.beforeEach((to,from,next)=>{
   console.log('33')
   console.log(from);
  //  next({"path":'/login'});
  if (to.path == '/login') {
     return next();
  } else {
    var token = '23323'
    if (token) {
       next()
    } else {
       next({path:'/login'});
    }
  }
});

export  {router}