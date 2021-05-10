<template>
  <div class="listGovOrgEmployeeEmailByCodes">
    <div class="flex a-center">
      <van-field v-model="accountIds" label="accountIds" placeholder="请输入accountIds" />
      <div style="text-align: center;width: 100px;padding: 0 10px;"/>
    </div>
    <div class="flex a-center">
      <van-field v-model="employeeCodes" label="员工 Code 列表" placeholder="请输入员工 Code 列表" />
      <div style="text-align: center;width: 99%;padding: 0 10px;">注：最多 100 个</div>
    </div>
    <div class="flex a-center">
      <van-field v-model="organizationCode" label="组织 Code" placeholder="请输入组织 Code" />
      <div style="text-align: center;width: 100px;padding: 0 10px;"/>
    </div>
    <div class="nt-btn login-btn" style="line-height: 40px;"  @click='getByEmployeeCode1'>根据组织 code 和批量员工 Code 获取员工的邮箱信息</div>
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
      accountIds: '',
      employeeCodes: '',
      organizationCode: '',
      callbackMsg: '',
    }
  },
  methods: {
    getByEmployeeCode1() {
      this.$get('/get-contact-user-info/list-gov-org-employee-email-by-codes',{
        accountIds:this.accountIds,
        employeeCodes:this.employeeCodes,
        organizationCode:this.organizationCode,
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
