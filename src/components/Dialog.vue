
<template>
    <div v-bind:class="{overlayer:true,active:value}">
        <div class="dialog">
            <div class="header"></div>
            <div class="content">{{msg}}</div>
            <div class="footer">
                <div class="cancel-btn" v-on:click="cancel">取消</div>
                <div class="confirm-btn" v-on:click="ok">确定</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Dialog',
        props:['value','msg'],
        data(){
            return {
            
            }
        },
        computed:{
         
        },
        created:function(){
          
        },
        methods:{
            cancel(){
                // alert('22')
                this.$emit('input', false);
            },
            ok(){
               this.$emit('ok')
            }
        }
    }
</script>

<style scoped>
    .overlayer {
        width:100%;
        height:100%;
        background-color:black;
        opacity:0.4;
        position:absolute;
        top:0;
        left:0;
        z-index:99989;
        display: none;
    }
    .dialog {
        width:200px;
        height:120px;
        background-color:#fff;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-100px,-50px);
        z-index:999999;
    }
    .dialog .content {
        height: 100px;
        line-height: 100px;
    }
    .dialog .footer {
        overflow:hidden;
        border-top:1px solid gray;
    }
     .dialog .footer .cancel-btn, .dialog .footer .confirm-btn {
        float:left;
        width:50%;
        text-align:center;
        padding-top:8px;
        padding-bottom:8px;
        
     }
      .dialog .footer .confirm-btn  {
          color:#28C4AF
      }
    .active {
        display:block
    }
</style>