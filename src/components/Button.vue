<template>
	<button v-on:click="clickHandler" v-bind:style="[baseStyle,optionStyle]" class="btn" >{{text}}</button>
</template>
<script>

	export default {
		props:['text','width','disabled'],
		data(){	
			return {
				baseStyle:{
					"width":"80px",
					"padding-top":"8px",
					"padding-bottom":"8px",
					"text-align":"center",
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
				console.log('88889')
		        console.log(this.disabled !== undefined);
				let bgc = this.disabled !== undefined ?'#ddd':'#28C4AF'
				return {
					width:w,
					"background-color":bgc
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
	.btn:disabled
{ 
background-color: #dddddd;
}
</style>