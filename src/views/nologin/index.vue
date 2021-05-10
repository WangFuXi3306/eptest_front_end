
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
          {router:'/authcode',text:'获取authcode'},
          {router:'/userinfo',text:'根据authcode获取用户信息/access_token'},
          {router:'/gettokenjson',text:'获取应用 access_token'}
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
