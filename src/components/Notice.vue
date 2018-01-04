
<template>
    <div class="notice" v-if="$store.state.notice.display">{{$store.state.notice.msg}}</div>
</template>

<script>
    export default {
       name:'notice'
    }

</script>

<style scoped>
  
    @-webkit-keyframes myfirst
            {
                from {
                    top:-120px;
                }
                to {
                    top:50%;
                }
            }
      .notice {
            position:absolute;
            top:80%;
            left:50%;
            width:100px;
            height:30px;
            text-align:center;
            line-height:30px;
            transform:translate(-50px,0);
            background-color:black; 
            opacity:0.4;
            color:#fff;  
            padding-left:8px;
            padding-right:8px;
            font-size:14px;
            /* animation:myfirst 1s; */
    }
</style>