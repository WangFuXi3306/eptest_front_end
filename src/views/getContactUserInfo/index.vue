
<template>
  <div>
    <div v-for="v in funList" style="width: 100%;margin-bottom: 10px;margin-right: 10px;">
      <div class="nt-btn login-btn" style="line-height: 40px;"  @click='goToPath(v.router)'>{{v.text}}</div>
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
        funList:[
          {router:'/hello',text:'获取Hello World'},
          {router:'/deactivate',text:'失效员工'},
          {router:'/getEmployeeTags',text:'根据员工 Code 查询详情/获取员工标签 code 列表'},
          {router:'/listEmployeeAccountIds',text:'批量根据员⼯ Code 查询详情/获取员⼯账号 ID'},
          {router:'/getEmployeeDetail',text:'查询组织下人员详情'},
          {router:'/listEmployeeEositionsByEmployeeCode',text:'根据员工code获取员工的任职'},
          {router:'/listGovEmployeeCodesByAccountIds',text:'批量根据账号 Id 获取人员 Code'},
          {router:'/listGovOrgEmployeeEmailByCodes',text:'根据组织 code 和批量员工 Code 获取员工的邮箱信息'},
          {router:'/getByMobile',text:'根据手机号码获取人员编码'},
          {router:'/listAccountOrgByIdAndCodes',text:'查询账号是否在此租户的组织内'},
          {router:'/queryByPropertyCode',text:'枚举字典查询'},
          {router:'/updateStatus',text:'冻结和解冻账号'}
        ],
      }
    },
    methods: {
      goToPath(path) {
        this.$router.push(path);
      }
    }

  }

</script>
