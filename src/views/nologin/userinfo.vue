<template>
  <div class="userinfo">
<!--    <div class="flex a-center">
      <van-field v-model="eventTag" label="authCode" placeholder="请输入authcode" />
      <div style="text-align: center;width: 100px;padding: 0 10px;"/>
    </div>-->
    <div class="nt-btn login-btn" style="line-height: 40px;"  @click='getCode1(getUserInfo)'>根据 authCode 换取用户信息</div>
    <div class="nt-btn login-btn" style="line-height: 40px;"  @click='getCode1(getDingTokenJson)'>根据 authCode 获取登录 token</div>

    <div style="padding: 0 0 0 10px;margin-top: 20px;" >
      <van-field type="textarea" autosize v-model="callbackMsg" label="返回参数" placeholder="返回信息如下" />
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
        eventTag: '',
        callbackUrl: '',
        callbackMsg: '',
        authCode: '0',
      }
    },
    methods: {

      getDingTokenJson() {
        window.console.log("getDingTokenJson" + this.authCode);
        this.$get('/no-login/get_ding_token.json',{
          auth_code:this.authCode,
        }).then(res => {
          this.callbackMsg = JSON.stringify(res);
        })
      },
      getUserInfo() {
        window.console.log("getUserInfo" + this.authCode);
        this.$get('/no-login/get-user-info',{
          auth_code:this.authCode,
        }).then(res => {
          this.callbackMsg = JSON.stringify(res);
        })
      },
      getCode1(callback) {
        dd.ready(() => {
          dd.getAuthCode({
            corpId: "1"
          }).then(res => {
            window.console.log(JSON.stringify(res));
            window.console.log(res.code);
            this.authCode = res.code;
            window.console.log("成功了呢")
            callback();
          }).catch(err => {
            window.console.log(JSON.stringify(err));
            window.console.log("失败了呢")
            callback();
          });
        })
      },
    },
    mounted() {
      const s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = 'https://g.alicdn.com/gdt/jsapi/1.3.2/index.js';
      document.body.appendChild(s);
    }
  }
</script>


<style lang="less" scoped>
  /deep/ .van-cell{
    padding-right: 0;
    background: none;
    color: inherit!important;
    border-bottom: none!important;
  }

  /deep/ .van-field__label{
    color: inherit;
    border-radius: 5px;
    padding: 5px;
    background: #e6eef4;
    box-shadow:  5px 5px 10px #c4cacf,
      -5px -5px 10px #ffffff;
  }

  /deep/ .van-field__value{
    background: #e6eef4!important;
    box-shadow: inset 4px 4px 8px #c4cacf,
      inset -4px -4px 8px #ffffff;
    user-select: none;
    color: inherit;
    padding: 10px 15px;
  }

  /deep/ .van-field__control{
    color: inherit;
    padding: 10px 15px ;
    width: 300px;
  }

  /deep/ .van-cell__title {
    width: 150px !important;
    flex: none !important;
    color: inherit!important;
  }
</style>
