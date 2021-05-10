
<template>
  <div>
    <div v-for="v in funList" style="width: 100%;margin-bottom: 10px;margin-right: 10px;">
      <div class="nt-btn login-btn" style="line-height: 40px;"  @click='goToPath(v.router)'>{{v.text}}</div>
    </div>
  </div>
</template>


<script>



  import Vue from 'vue';
  import { Popover } from 'vant';

  Vue.use(Popover);

  export default{
    data () {
      return {
        funList:[
          {router:'/register',text:'注册消息回调/（加密）'},
          {router:'/query',text:'查询定义的事件列表/回调失败信息'},
          {router:'/remove',text:'移除/重试失败回调'},
          {router:'/delete',text:'更新事件回调的定义信息'}
        ],
      }
    },
    methods: {
      goToPath(path) {
        this.$router.push(path);
      }
    }

  }

</script>
