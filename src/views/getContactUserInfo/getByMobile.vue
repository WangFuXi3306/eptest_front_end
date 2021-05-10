<template>
  <div class="getByMobile">
    <div class="flex a-center">
      <van-field v-model="areaCode" label="手机区号" placeholder="请输入手机区号" />
      <div style="text-align: center;width: 100%;padding: 0 10px;">注：不填写时默认 86</div>
    </div>
    <div class="flex a-center">
      <van-field v-model="namespace" label="namespace" placeholder="请输入命名空间" />
      <div style="text-align: center;width: 100%;padding: 0 10px;">注：默认 local，可不填</div>
    </div>
    <div class="flex a-center">
      <van-field v-model="mobile" label="手机号" placeholder="请输入手机号" />
      <div style="text-align: center;width: 100px;padding: 0 10px;"/>
    </div>
    <div class="nt-btn login-btn" style="line-height: 40px;"  @click='getByEmployeeCode1'>根据手机号码获取人员编码</div>
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
      areaCode: '',
      namespace: '',
      mobile: '',
      callbackMsg: '',
    }
  },
  methods: {
    getByEmployeeCode1() {
      this.$get('/get-contact-user-info/get-by-mobile',{
        areaCode:this.areaCode,
        namespace:this.namespace,
        mobile:this.mobile,
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
  width: 150px !important;
  flex: none !important;
  color: inherit!important;
}
</style>
