import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// import Home from '@/components/Home'
import My from '@/components/My'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
// import Physical from '@/components/Physical'
import Notfound from '@/components/Notfound'
import Main from  '@/components/Main'
import Login from '@/components/Login'
import Coupon from '@/components/Coupon'
import Prebook from '@/components/Prebook'
import Check from '@/components/Check'
import Button from '@/components/Button'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
Vue.use(Router)
Vue.component('Button',Button);
// Vue.component('Header',Header)
// Vue.component('Button',Button)

var router =  new Router({
  mode:'history',
  routes: [
    {
      path: '/prebook',
      component: Main,
      children:[
           {path:'',name:'预约',component:Prebook}
      ]
    },
    {
      path: '/my',
      component: Main,  
      children:[
          {path:'',component:My,name:'我的'}
      ]
    },
    {
      path: '/check',
      component:Main,
      children:[
         {path:'',component:Check,name:'买单'}
      ]
    },
    {
      path:'/coupon',
      component:Main,
      children:[
          {path:'',component:Coupon,name:'卡包'}
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
   var isLogin = VueCookies.isKey('isLogin');
   console.log('tpyeof')
   console.log(typeof isLogin);
  //  next({"path":'/login'});
  if (to.path == '/login') {
     if (isLogin) {
        next({path:'/prebook'});
     } else {
        return next();
     }
    
  } else {
    // var token = '23323'
    
  
    if (isLogin) {
       next()
    } else {
       next({path:'/login'});
    }
  }
});

export  {router}