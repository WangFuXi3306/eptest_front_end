<template>
  <div class="remove">
    <div class="flex a-center">
      <van-field v-model="eventCallbackFailedId" label="失败回调id" placeholder="请输入失败的id" />
      <div style="text-align: center;width: 100px;padding: 0 10px;"/>
    </div>
    <div class="nt-btn login-btn" style="line-height: 40px;"  @click='removeOperation'>移除失败回调</div>
    <div class="nt-btn login-btn" style="line-height: 40px;"  @click='retryOperation'>重试失败回调</div>
    <div style="padding: 0 0 0 10px;margin-top: 20px;" >
      <van-field type="textarea" autosize v-model="callbackMsg" label="移除失败回调返回参数" placeholder="移除失败回调返回信息如下" />
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
      eventCallbackFailedId: '',
      callbackMsg: '',
    }
  },
  methods: {
    removeOperation() {
      this.$get('/callback/remove',{
        eventCallbackFailedId:this.eventCallbackFailedId,
      }).then(res => {
        this.callbackMsg = JSON.stringify(res);
      })
    },
    retryOperation() {
      this.$get('/callback/retry',{
        eventCallbackFailedId:this.eventCallbackFailedId,
      }).then(res => {
        this.callbackMsg = JSON.stringify(res);
      })
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
  padding: 10px 15px;
}

/deep/ .van-field__control{
  color: inherit;
  padding: 10px 15px ;
  width: 300px;
}

/deep/ .van-cell__title {
  width: 70px !important;
  flex: none !important;
  color: inherit!important;
}
</style>
