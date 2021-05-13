
<template>
  <selectList :funList="funList"  :describeList="describeList"/>
</template>


<script>

  import Vue from 'vue';
  import { Popover } from 'vant';
  import selectList from "@/views/info/selectList";

  Vue.use(Popover);

  export default{
    components: {
      selectList
    },


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
          {router:'/listGovOrgEmployeeEmailByCodes',text:'根据组织和批量员工Code获取员工的邮箱信息'},
          {router:'/getByMobile',text:'根据手机号码获取人员编码'},
          {router:'/listAccountOrgByIdAndCodes',text:'查询账号是否在此租户的组织内'},
          {router:'/queryByPropertyCode',text:'枚举字典查询'},
          {router:'/updateStatus',text:'冻结和解冻账号'}
        ],

        describeList:[
          {
            apiName:'无',
            apiChinaName:'获取Hello World',
            apiMenu:'无',
            apiFunDsc:'获取Hello World',
            show:false
          },
          {
            apiName:'/mozi/employee/deactivateGovEmployee\n',
            apiChinaName:'失效员工',
            apiMenu:'获取通讯录用户信息',
            apiFunDsc:'人员失效',
            show:false
          },
          {
            apiName:'/mozi/employee/getEmployeeByCode' + '\n' + '/mozi/employee/listEmployeeTags',
            apiChinaName:'根据员工 Code 查询详情' + '\n' + '根据员工 Code获取员工标签code列表',
            apiMenu:'获取通讯录用户信息',
            apiFunDsc:'根据员工 Code 查询详情' + '\n' + '列表查询员工标签',
            show:false
          },
          {
            apiName:'/mozi/employee/listEmployeesByCodes' + '\n' + '/mozi/employee/listEmployeeAccountIds',
            apiChinaName:'根据员⼯ Code 列表查询详情' + '\n' + '通过员工 Code 列表获取员⼯账号 ID',
            apiMenu:'获取通讯录用户信息',
            apiFunDsc:'根据员⼯ Code 列表查询详情' + '\n' + '通过员工 Code 列表获取员⼯账号 ID',
            show:false
          },
          {
            apiName:'/mozi/organization/pageOrganizationEmployeePositions',
            apiChinaName:'查询组织下人员详情',
            apiMenu:'获取通讯录用户信息',
            apiFunDsc:'查询组织下人员详情，包含个人信息和任职信息',
            show:false
          },
          {
            apiName:'/mozi/employee/listEmployeePositionsByEmployeeCode',
            apiChinaName:'根据员工code获取员工的任职',
            apiMenu:'获取通讯录用户信息',
            apiFunDsc:'根据员工code获取员工的任职',
            show:false
          },
          {
            apiName:'/mozi/employee/listGovEmployeeCodesByAccountIds',
            apiChinaName:'批量 通过账号Id 列表获取人员Code',
            apiMenu:'获取通讯录用户信息',
            apiFunDsc:'批量 通过账号Id 列表获取人员Code',
            show:false
          },
          {
            apiName:'/mozi/employee/listGovOrgEmployeeEmailByCodes',
            apiChinaName:'根据组织code和批量员工 Code 获取员工的邮箱信息',
            apiMenu:'获取通讯录用户信息',
            apiFunDsc:'根据组织code和批量员工 Code 获取员工的邮箱信息',
            show:false
          },
          {
            apiName:'/mozi/employee/get_by_mobile',
            apiChinaName:'根据手机号码获取人员编码',
            apiMenu:'获取通讯录用户信息',
            apiFunDsc:'根据手机号码获取人员编码',
            show:false
          },
          {
            apiName:'暂无',
            apiChinaName:'暂无',
            apiMenu:'获取通讯录用户信息',
            apiFunDsc:'暂无',
            show:false
          },
          {
            apiName:'暂无',
            apiChinaName:'暂无',
            apiMenu:'获取通讯录用户信息',
            apiFunDsc:'暂无',
            show:false
          },
          {
            apiName:'/mozi/account/updateGovAccountStatus',
            apiChinaName:'冻结和解冻账号',
            apiMenu:'获取通讯录用户信息',
            apiFunDsc:'冻结和解冻账号',
            show:false
          },
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
