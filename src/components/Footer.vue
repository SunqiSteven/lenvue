<template>
	<ul class="footer">
		<router-link  v-for='(m,index) in menus' :to="m.to" :key="m.index">
			{{m.name}}
		</router-link>
	</ul>
</template>
<script>
	export default {
		props:['active'],
		data(){
			return {
				menus:[
						{name:'预约',to:'/prebook'},
						{name:'买单',to:'/check'},
						{name:'卡包',to:'/coupon'},
						{name:'我的',to:'/my'},
					]
			}
		}
	}

</script>

<style scoped>
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
		padding-top:7px;
		padding-bottom:7px;
		font-size:14px;
		text-decoration:none;
	}
	.active {
		color:#28C4AF;
	}
	.router-link-active {
		color:#28C4AF
	}
</style>