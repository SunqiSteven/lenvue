
<template>
<div>
    <Header v-bind:title="headerTitle"/>
    <transition name="slide">
    <router-view/>
    </transition>
	<ul class="footer">
		<router-link  v-for='(m,index) in menus' :to="m.to" :key="m.index">
			{{m.name}}  
		</router-link>
	</ul>
</div>
</template>
<script>
import Header from '@/components/Header'
export default {
    data(){
        return {
            headerTitle:'首页',
            menus:[
						{name:'预约',to:'/prebook'},
						{name:'买单',to:'/check'},
						{name:'卡包',to:'/coupon'},
						{name:'我的',to:'/my'},
					]
        }
    },
    components:{
        Header
    },
    created(){
		console.log(this.$route)
	},
    methods:{
     
    },
    watch:{
        '$route':function(to,from){
            // console.log(to)
            this.$store.commit('changeHeaderTitle',to.name);
            //  this.headerTitle = '会员中心';
            // if (to.path =='/home') {
            //     this.headerTitle = '首页'
            // } 
            // if (to.path == '/member') {
            //     console.log("22")
            //         console.log(this)
            //     this.headerTitle = '会员中心';
            // }
            // if (to.path == '/physical') {
            //     console.log(to.path);
            //     console.log(this)
            //     this.headerTitle = "体检";
            // }
            // if (to.path == '/physical') {
            //     console.log(to.path);
            //     console.log(this)
            //     this.headerTitle = "体检";
            // }
        }
    }
}
</script>

<style>

	.back {
		color:#FFF;
		position:absolute;
		top:7px;
		left:10px;
		font-size:20px;
		text-decoration:none;
	}
    .footer {
		width:100%;
		overflow:hidden;
		position:fixed;
		bottom:0;
		left:0;
		z-index:9999;
		background:#FFF;
		box-shadow:1px -1px 1px #EEE;
	}
	.footer a {
		width:25%;
		text-align:center;
		float:left;
		padding-top:22px;
		font-size:14px;
        background-color:#F7F7FA;
		text-decoration:none;
        background-image:url('../assets/home_icon.png'); 
        background-repeat :no-repeat;
        background-size:22px 22px;
        background-position:center top;
	}
    .router-link-active {
		color:#F36E65;
	}
    .footer a:nth-child(2) {
        background-image:url('../assets/images/check_2.png'); 
    }
    .footer a:nth-child(3) {
        background-image:url('../assets/images/card_2.png'); 
    }
    .footer a:nth-child(4) {
        background-image:url('../assets/images/account_2.png'); 
    }
    .footer a:nth-child(1) {
        background-image:url('../assets/images/reserve_2.png'); 
    }
    .footer .router-link-active:nth-child(4) {
        background-image:url('../assets/images/account_1.png'); 
    }
    .footer .router-link-active:nth-child(1) {
        background-image:url('../assets/images/reserve_1.png'); 
    }
    .footer .router-link-active:nth-child(2) {
        background-image:url('../assets/images/check_1.png'); 
    }
    .footer .router-link-active:nth-child(3) {
        background-image:url('../assets/images/card_1.png'); 
    }
@-webkit-keyframes slideInLeft {
 from {
  /* -webkit-transform: translate3d(200%, 0, 0); */
  /* transform: translate3d(200%, 0, 0); */
  transform: translateX(200%);
  visibility: visible;
 }
 
 to {
  /* -webkit-transform: translate3d(0, 0, 0); */
  /* transform: translate3d(0, 0, 0); */
  transform: translateX(0);
 }
 
}
    .slide-enter-active {
         transition: width .3s ease;
          animation :slideInLeft .3s ease;
    }
    .slide-enter {
        /* opacity: 1;
        width:0; */
        /* transform: translateX(-9990px); */
            
    }
    .slide-enter-to {
         /* opacity: 1;
         width:100px; */
         /* transform:translateX(900px); */
         /* animation-name :slideInLeft; */
    }
    .slide-leave {
        /* opacity: 0; */
        /* height:0; */
    }
    .slide-leave-active {
         transition: all .8s ease;
    }
    .slide-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
        transform: translateX(-1000px);
        opacity: 0;
        height:0;
    }

</style>