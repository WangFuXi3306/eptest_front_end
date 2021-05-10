<template>
  <div class="hello">
    <div class="nt-btn login-btn" style="line-height: 40px;"  @click='queryEventCallback'>获取Hello World</div>
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
    }
  },
  methods: {
    queryEventCallback() {
      this.$get('/get-contact-user-info/hello',{
      }).then(res => {
        this.callbackMsg = JSON.stringify(res);
      });
    }
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
