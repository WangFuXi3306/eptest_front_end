<template>
<!--  <div style="padding: 0 0 0 10px;margin-top: 20px;" >
    <div>真实姓名:{{lastName}}</div>
    <div>昵称:{{nickNameCn}}</div>
    <div>账号:{{account}}</div>
    <div>账号ID:{{accountId}}</div>
    <div>登录平台:{{platform}}</div>
  </div>-->
  <div>
    <el-table
        :data="tableData"
        stripe
        style="width: 100%">
      <el-table-column
          prop="date"
          label="序号"
          width="100">
      </el-table-column>
      <el-table-column
          prop="name"
          label="项目"
          width="150">
      </el-table-column>
      <el-table-column
          prop="info"
          label="信息">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>



export default {

  data () {
    return {
      lastName: '',   //真实姓名
      nickNameCn: '',   //昵称
      account: '',    //账号
      accountId: '',
      platform: '',    //登录平台
      authCode: '0',
      tableData: [{
        date: '1',
        name: '真实姓名',
        info: window.localStorage.getItem('lastName')
      }, {
        date: '2',
        name: '昵称',
        info: window.localStorage.getItem('nickNameCn')
      }, {
        date: '3',
        name: '账号',
        info: window.localStorage.getItem('account')
      }, {
        date: '4',
        name: '账号ID',
        info: window.localStorage.getItem('accountId')
      }]
    }
  },
  methods: {
      getUserInfo() {
      window.console.log("getUserInfo" + this.authCode);
      this.$get('/no-login/get-user-info',{
        auth_code:this.authCode,
      }).then(res => {
        let data = res.data.content.data;
        this.lastName = data.lastName;
        this.nickNameCn = data.nickNameCn;
        this.account = data.account;
        this.accountId = data.accountId;
        this.platform = data.realmName;
        window.localStorage.removeItem('lastName');
        window.localStorage.setItem('lastName', this.lastName);
        window.localStorage.removeItem('nickNameCn');
        window.localStorage.setItem('nickNameCn', this.nickNameCn);
        window.localStorage.removeItem('account');
        window.localStorage.setItem('account', this.account);
        window.localStorage.removeItem('accountId');
        window.localStorage.setItem('accountId', this.accountId);
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
    this.getCode1(this.getUserInfo);
  }
}
</script>

<style scoped>

</style>