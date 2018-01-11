

<template>
	<div>
		<input type="text" placeholder="手机号"/>
		<input type="text" placeholder="密码"/>
	</div>
</template>

<script>
	export default {
		data(){
			return {

			}
        },
        created(){
            this.$store.commit('notice','登录成功');           
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
</style>