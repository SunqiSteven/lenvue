

<template>
  <div>
	<div class="login-container">
    <div class="errmsg" v-if="showerror">{{errmsg}}</div>
    <div class="inputs">
      <input type="text" placeholder="手机号" @blur="phoneblur" v-model="tel"/>
      <input type="text" placeholder="密码" class="input-password" v-model="pwd" @input="pwdinput"/>
    </div>
    <Button text="登录" width="100%" @on-click="login"/>
	</div>
  </div>
</template>

<script>
import Header from '@/components/Header'
	export default {
		data(){
			return {
          showerror:true,
          errmsg:'',
          tel:'',
          pwd:''
			}
        },
    created(){
            // this.$store.commit('notice','组件加载成功');            
    },
    components:{Header},
    methods:{
       login:function(){
          if (!/^1[3587]\d{9}$/.test(this.tel)) {
            //  this.showerror = true;
             return this.errmsg = '手机号格式不正确';
          }
          if (!this.pwd) {
             return this.errmsg = '请输入密码';
          }
          this.$router.push({ path: '/prebook' })
          this.$cookies.set('isLogin',1);
          this.$cookies.set('tel',this.tel);
         
       
        
       },
       pwdinput:function(){
          if (!this.pwd) {
             return this.errmsg = '请输入密码';
          } else {
             this.errmsg = '';
          }
       },
       phoneblur:function(){
          if (!/^1[3587]\d{9}$/.test(this.tel)) {
            //  this.showerror = true;
             return this.errmsg = '手机号格式不正确';
          } else {
            // this.showerror = false;
            this.errmsg = '';
          }
       }
    }
	}
</script>

<style>
input {
   background-color: #fff;
   width:100%;
   padding-top:10px;
   padding-bottom:10px;
   margin-top:8px;
   padding-left:4px;
   border:1px solid transparent;
}
input:focus{
	outline:none;
}
::-webkit-input-placeholder {
	color:#bbb;
}
::-moz-placeholder {
	color:#bbb;
}
.login-container {
   margin-top:50%;
}
.inputs {
   margin-bottom:18px;
}
.errmsg {
   color:red;
   text-align:center;
   height: 24px;
}
</style>