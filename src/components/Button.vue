<template>
	<button v-on:click="clickHandler" v-bind:style="[baseStyle,optionStyle]">{{text}}</button>
</template>
<script>

	export default {
		props:['text','width'],
		data(){
			return {
				baseStyle:{
					"width":"80px",
					"padding-top":"8px",
					"padding-bottom":"8px",
					"text-align":"center",
					"background-color":"#28C4AF",
					"color":"#fff",
					"outline": "none",
					"font-size":"12px",
					"cursor": "pointer",
					"border":"0",
					"letter-spacing": "normal"
				}
			}
		},
		computed:{
			optionStyle:function(){
				var w = this.width ? this.width:'80px'
				return {
					width:w
				}
			}
		},
		methods:{
			clickHandler(){
				this.$emit('on-click');
			}
		}
	}
</script>
<style scoped>
	.btn {
		
	}
	.long {
		width:100%;
	}
</style>