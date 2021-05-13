
<template>
    <selectList :funList="funList"  :describeList="describeList"/>
</template>


<script>

  import Vue from 'vue';
  import { Popover } from 'vant';
  import selectList from "@/views/info/selectList";

  Vue.use(Popover);

  export default{
    components: {
      selectList
    },

    data () {
      return {
          funList:[
            {router:'/authcode',text:'获取authcode'},
            {router:'/userinfo',text:'根据authcode获取用户信息/access_token'},
            {router:'/gettokenjson',text:'获取应用 access_token'}
          ],

        describeList:[
            {
              apiName:'getAuthCode',
              apiChinaName:'获取登录授权码',
              apiMenu:'免登',
              apiFunDsc:'获取应用免登授权码',
              show:false
            },
            {
              apiName:'/rpc/oauth2/dingtalk_app_user.json' + '\n' + '/rpc/oauth2/dingtalk_app_token.json',
              apiChinaName:'根据authCode换取用户信息' + '\n' + '根据authCode获取登录token',
              apiMenu:'企业内应用免登',
              apiFunDsc:'根据authCode换取用户信息' + '\n' + '根据authCode获取登录token',
              show:false
            },
            {
              apiName:'/gettoken.json',
              apiChinaName:'获取应用access_token',
              apiMenu:'企业内应用免登',
              apiFunDsc:'获取应用access_token',
              show:false
            },
         ]
      }
    },

  }

</script>

