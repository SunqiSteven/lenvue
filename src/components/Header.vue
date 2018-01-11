<template>
	<div class="header">
		<a class="back" href="javascript:history.back();">&lt;</a>
		<span class="title">{{$store.state.headerTitle}}</span>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped>
	.back {
		color:#FFF;
		position:absolute;
		top:7px;
		left:10px;
		font-size:20px;
		text-decoration:none;
	}
	.header {
		padding-top:7px;
		padding-bottom:7px;
		color:#FFF;
		text-align:center;
		width:100%;
		background:#F36E65;
		position:relative;
	}
</style>