<template>
    <div>
        <div class="nt-btn login-btn" style="line-height: 40px;"  @click='goToCallBack'>消息回调功能测试</div>
        <div class="nt-btn login-btn" style="line-height: 40px;"  @click='goToNoLogin'>免登测试</div>
        <div class="nt-btn login-btn" style="line-height: 40px;"  @click='gotoGetContactUserInfo'>获取员工信息测试</div>
    </div>
</template>


<script>

  import Vue from 'vue';
  import { Popover } from 'vant';

  Vue.use(Popover);

    export default{
        data () {
            return {
                msg: '这个是Home模板页'
            }
        },
      methods: {
        goToCallBack() {
          this.$router.push('/callback');
        },
        goToNoLogin() {
          this.$router.push('/nologin');
        }
        ,
        gotoGetContactUserInfo() {
          this.$router.push('/getContactUserInfo');
        }
      }
    }
</script>
