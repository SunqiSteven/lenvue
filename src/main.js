// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from './router'
import Vuex from 'vuex'
Vue.config.productionTip = false
Vue.use(Vuex);
var store = new Vuex.Store({
   state:{
      headerTitle:'体检',
      notice:{
        msg:'success',
        display:false
      }
   },
   mutations:{
     changeHeaderTitle(state,title){
       console.log(state);
       console.log(title)
      state.headerTitle = title;
     },
     openNotice(state,msg){
       state.notice.display = true;
       state.notice.msg = msg;
       setTimeout(function(){
         state.notice.display = false;
       },3000);
     }
   }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
