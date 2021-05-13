import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  //mode: "history",
  routes: [
    /*{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },*/
    {
      path: '/register',
      name: '注册消息回调/（加密）',
      component: () => import('@/views/callback/register')
    },
    /*{
      path: '/',
      name: '选择测试目录',
      component: () => import('@/views/mainPage')
    },*/
    {
      path: '/',
      name: '首页',
      component: () => import('@/views/firstPage')
    },
    {
      path: '/callback',
      name: '消息回调功能测试',
      component: () => import('@/views/callback/index')
    },
    {
      path: '/nologin',
      name: '免登测试',
      component: () => import('@/views/nologin/index')
    },
    {
      path: '/query',
      name: '查询定义的事件列表/回调失败信息',
      component: () => import('@/views/callback/query')
    },
    {
      path: '/authcode',
      name: '获取authcode',
      component: () => import('@/views/nologin/authcode'),
    },
    {
      path: '/userinfo',
      name: '获取用户信息/access_token',
      component: () => import('@/views/nologin/userinfo')
    },
    {
      path: '/gettokenjson',
      name: '获取应用 access_token',
      component: () => import('@/views/nologin/gettokenjson')
    },
    {
      path: '/remove',
      name: '移除/重试失败回调',
      component: () => import('@/views/callback/remove')
    },
    {
      path: '/delete',
      name: '更新事件回调的定义信息',
      component: () => import('@/views/callback/delete')
    },
    {
      path: '/getContactUserInfo',
      name: '获取员工信息测试',
      component: () => import('@/views/getContactUserInfo/index')
    },
    {
      path: '/hello',
      name: '获取Hello World',
      component: () => import('@/views/getContactUserInfo/hello')
    },
    {
      path: '/deactivate',
      name: '失效员工',
      component: () => import('@/views/getContactUserInfo/deactivate')
    },
    {
      path: '/getEmployeeTags',
      name: '根据 Code 查询详情/获取员code 列表',
      component: () => import('@/views/getContactUserInfo/getEmployeeTags')
    },
    {
      path: '/listEmployeeAccountIds',
      name: '批量根据 Code 查询详情/获取账号 ID',
      component: () => import('@/views/getContactUserInfo/listEmployeeAccountIds')
    },
    {
      path: '/getEmployeeDetail',
      name: '查询组织下人员详情',
      component: () => import('@/views/getContactUserInfo/getEmployeeDetail')
    },
    {
      path: '/listEmployeeEositionsByEmployeeCode',
      name: '根据员工code获取员工的任职',
      component: () => import('@/views/getContactUserInfo/listEmployeeEositionsByEmployeeCode')
    },
    {
      path: '/listGovEmployeeCodesByAccountIds',
      name: '批量根据账号 Id 获取人员 Code',
      component: () => import('@/views/getContactUserInfo/listGovEmployeeCodesByAccountIds')
    },
    {
      path: '/listGovOrgEmployeeEmailByCodes',
      name: '根据组织和批量员工Code获取员工的邮箱信息',
      component: () => import('@/views/getContactUserInfo/listGovOrgEmployeeEmailByCodes')
    },
    {
      path: '/queryByPropertyCode',
      name: '枚举字典查询',
      component: () => import('@/views/getContactUserInfo/queryByPropertyCode')
    },
    {
      path: '/updateStatus',
      name: '冻结和解冻账号',
      component: () => import('@/views/getContactUserInfo/updateStatus')
    },
    {
      path: '/getByMobile',
      name: '根据手机号码获取人员编码',
      component: () => import('@/views/getContactUserInfo/getByMobile')
    },
    {
      path: '/listAccountOrgByIdAndCodes',
      name: '查询账号是否在此租户的组织内',
      component: () => import('@/views/getContactUserInfo/listAccountOrgByIdAndCodes')
    },
    {
      path: '/userInfoMain',
      name: '用户信息',
      component: () => import('@/views/info/userInfoMain')
    },
    {
      path: '/topIndex',
      name: 'topIndex',
      component: () => import('@/views/indexViews/topIndex')
    }



  ]
})
