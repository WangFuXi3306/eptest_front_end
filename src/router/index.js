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
      name: 'register',
      component: () => import('@/views/callback/register')
    },
    {
      path: '/',
      name: 'mainPage',
      component: () => import('@/views/mainPage')
    },
    {
      path: '/callback',
      name: 'callback',
      component: () => import('@/views/callback/index')
    },
    {
      path: '/nologin',
      name: 'nologin',
      component: () => import('@/views/nologin/index')
    },
    {
      path: '/query',
      name: 'query',
      component: () => import('@/views/callback/query')
    },
    {
      path: '/authcode',
      name: 'authcode',
      component: () => import('@/views/nologin/authcode')
    },
    {
      path: '/userinfo',
      name: 'userinfo',
      component: () => import('@/views/nologin/userinfo')
    },
    {
      path: '/gettokenjson',
      name: 'gettokenjson',
      component: () => import('@/views/nologin/gettokenjson')
    },
    {
      path: '/remove',
      name: 'remove',
      component: () => import('@/views/callback/remove')
    },
    {
      path: '/delete',
      name: 'delete',
      component: () => import('@/views/callback/delete')
    },
    {
      path: '/getContactUserInfo',
      name: 'getContactUserInfo',
      component: () => import('@/views/getContactUserInfo/index')
    },
    {
      path: '/hello',
      name: 'hello',
      component: () => import('@/views/getContactUserInfo/hello')
    },
    {
      path: '/deactivate',
      name: 'deactivate',
      component: () => import('@/views/getContactUserInfo/deactivate')
    },
    {
      path: '/getEmployeeTags',
      name: 'getEmployeeTags',
      component: () => import('@/views/getContactUserInfo/getEmployeeTags')
    },
    {
      path: '/listEmployeeAccountIds',
      name: 'listEmployeeAccountIds',
      component: () => import('@/views/getContactUserInfo/listEmployeeAccountIds')
    },
    {
      path: '/getEmployeeDetail',
      name: 'getEmployeeDetail',
      component: () => import('@/views/getContactUserInfo/getEmployeeDetail')
    },
    {
      path: '/listEmployeeEositionsByEmployeeCode',
      name: 'listEmployeeEositionsByEmployeeCode',
      component: () => import('@/views/getContactUserInfo/listEmployeeEositionsByEmployeeCode')
    },
    {
      path: '/listGovEmployeeCodesByAccountIds',
      name: 'listGovEmployeeCodesByAccountIds',
      component: () => import('@/views/getContactUserInfo/listGovEmployeeCodesByAccountIds')
    },
    {
      path: '/listGovOrgEmployeeEmailByCodes',
      name: 'listGovOrgEmployeeEmailByCodes',
      component: () => import('@/views/getContactUserInfo/listGovOrgEmployeeEmailByCodes')
    },
    {
      path: '/queryByPropertyCode',
      name: 'queryByPropertyCode',
      component: () => import('@/views/getContactUserInfo/queryByPropertyCode')
    },
    {
      path: '/updateStatus',
      name: 'updateStatus',
      component: () => import('@/views/getContactUserInfo/updateStatus')
    },
    {
      path: '/getByMobile',
      name: 'getByMobile',
      component: () => import('@/views/getContactUserInfo/getByMobile')
    },
    {
      path: '/listAccountOrgByIdAndCodes',
      name: 'listAccountOrgByIdAndCodes',
      component: () => import('@/views/getContactUserInfo/listAccountOrgByIdAndCodes')
    }



  ]
})
