<template>
	<div>
		<li v-for="user in users" :key="user.id">{{user.name}}</li>
		<Dialog v-model="isDialog" v-on:ok="ok" msg="确定删除吗?"/>
		<Button text="确认" v-on:on-click="clickHandler" width="100%"/>
	</div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Dialog from '@/components/Dialog';
import Button from '@/components/Button';	
export default {
         data(){
			return {
				keyword:'',
				isDialog:false,
				users:[
						{id:1,name:'BTC'},
						{id:2,name:'ETH'},
						{id:3,name:'QTUM'},	
						{id:4,name:'NEO'},
						{id:5,name:'BCC'},
						{id:6,name:'EOS'}
					]
			}
		},
		methods:{
			clickHandler(){
				this.isDialog = true;
			},
			ok(){
				this.isDialog = false;
			}
		},
		components:{Header,Footer,Dialog,Button},
		created:function(){
			 this.$store.commit('openNotice','组件加载成功')
		}
		
	}
</script>

<style scoped>
	.list-item {
		width:20%;
		padding-top:10px;
		padding-bottom:10px;
		background:#FFF;
		list-style:none;
		border-bottom:1px solid #EEE;
		text-align:left;
		padding-left:8px

	}
	.list-item:hover {
		background:gray;
		color:#FFF;
		opacity:0.3;
	}
</style>