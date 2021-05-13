<template>
  <div class="authcode">
    <div class="nt-btn login-btn" style="line-height: 40px;"  @click='getCode'>获得authcode</div>
    <div style="padding: 0 0 0 10px;margin-top: 20px;" >
      <van-field type="textarea" autosize v-model="authCode" label="返回参数" placeholder="返回信息如下" />
    </div>

  </div>
<!--  <remote-script src="https://g.alicdn.com/gdt/jsapi/1.3.2/index.js"></remote-script>-->
</template>


<script>
  import Vue from 'vue';
  import { Popover } from 'vant';
  //import dd from "dingtalk-jsapi"
  //import dd from "../../plugins/dd-jsapi"
  //import dd from 'https://g.alicdn.com/gdt/jsapi/1.3.2/index.js'

  Vue.use(Popover);

  export default{
    data () {
      return {
        eventTag: '',
        callbackUrl: '',
        callbackMsg: '',
        authCode: ""
      }
    },
    methods: {
      getCode() {

        window.console.log(this.$route);

        dd.ready(() => {
          window.console.log("ready");
          dd.getAuthCode({
            corpId: "1"
          }).then(res => {
            window.console.log(JSON.stringify(res));
            window.console.log(JSON.stringify(res.code));
            this.authCode = res.code
          }).catch(err => {
            window.console.log(JSON.stringify(err));
          });

        })

        window.console.log(dd.version());

      }
    },
    /*mounted() {
      const s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = 'https://g.alicdn.com/gdt/jsapi/1.3.2/index.js';
      document.body.appendChild(s);
    },*/






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
    padding: 10px ;
  }

  /deep/ .van-field__control{
    color: inherit;
    padding: 10px  ;
    width: 300px;
  }

  /deep/ .van-cell__title {
    width: 150px !important;
    flex: none !important;
    color: inherit!important;
  }
</style>
