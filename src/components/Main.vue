
<template>
<div>
    <Header v-bind:title="headerTitle"/>
    <router-view/>
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
						{name:'首页',to:'/home'},
						{name:'体检',to:'/physical'},
						{name:'礼券',to:'/coupon'},
						{name:'我的',to:'/member'},
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
            console.log(to)
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
		color:#28C4AF;
	}
    .footer a:nth-child(2) {
        background-image:url('../assets/test_icon.png'); 
    }
    .footer .router-link-active:nth-child(4) {
        background-image:url('../assets/home_pree_icon.png'); 
    }
    .footer .router-link-active:nth-child(1) {
        background-image:url('../assets/home_pree_icon.png'); 
    }
    .footer .router-link-active:nth-child(2) {
        background-image:url('../assets/test_pree_icon.png'); 
    }
    .footer .router-link-active:nth-child(3) {
        background-image:url('../assets/home_pree_icon.png'); 
    }
</style>