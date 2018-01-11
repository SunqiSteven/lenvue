<template>
  <div id="app">
      <router-view/>
      <Notice/>
      
  </div>
</template>

<script>
import Notice from '@/components/Notice';
export default {
  name: 'app',
  components:{Notice}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html { width:100%;}
body,html,p,div,ul,li {
  margin:0;padding:0;
  list-style:none;
}
body {
  width:100%;
}
a {color:#bbb;}
	.datepicker-input {
		width:100%;
    padding-top:10px;
    padding-bottom:10px;
    border:0px;
    padding-left:8px;
	}
  .datepicker-wrapper {
    border:1px solid red;
  }
  .datepicker-calendar {
     border:1px solid red;
  }
</style>
