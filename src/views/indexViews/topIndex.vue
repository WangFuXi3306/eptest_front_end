<template>
  <div  style=" border: 2px #2c3e50 solid;height: 60px">
    <div style="margin-top: 10px; margin-left: 5px; margin-right: 10px">
      <div class="nt-btn login-btn" style="float:left; line-height: 40px; width: 100px"  @click='goToMainPage'>接口测试</div>
      <div class="nt-btn login-btn" style="float:left; line-height: 40px; width: 100px"  @click='gotoUserInfoMain'>用户信息</div>
      <div class="nt-btn login-btn" style="float:right; line-height: 40px; width: 50px"  @click='gotoBack'>返回</div>
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
      msg: '这个是Home模板页'
    }
  },
  methods: {
    goToMainPage() {
      this.$router.push('/');
    },
    gotoUserInfoMain() {
      this.$router.push('/userInfoMain');
    },
    gotoBack() {
      this.$router.go(-1);
    },
  }
}
</script>

<style scoped>

</style>