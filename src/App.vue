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
</style>
