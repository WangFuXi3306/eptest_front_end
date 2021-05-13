
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
          {router:'/register',text:'注册消息回调/（加密）'},
          {router:'/query',text:'查询定义的事件列表/回调失败信息'},
          {router:'/remove',text:'移除/重试失败回调'},
          {router:'/delete',text:'更新事件回调的定义信息'}
        ],
        describeList:[
          {
            apiName:'/openplatform/message/register_event_callback' + '\n' + '/openplatform/message/v2/register_event_callback',
            apiChinaName:'注册消息回调' + '\n' + '注册消息回调（支持加密、签名）',
            apiMenu:'业务事件回调',
            apiFunDsc:'注册消息回调' + '\n' + '注册消息回调（支持加密、签名）',
            show:false
          },
          {
            apiName:'/openplatform/message/query_callback_define' + '\n' + '/openplatform/message/query_callback_failed',
            apiChinaName:'查询定义的事件列表' + '\n' + '查询回调失败信息',
            apiMenu:'业务事件回调',
            apiFunDsc:'查询定义的事件列表' + '\n' + '查询回调失败信息，一次最多返回200条数据',
            show:false
          },
          {
            apiName:'/openplatform/message/remove_callback_failed' + '\n' + '/openplatform/message/retry_callback_failed',
            apiChinaName:'移除失败回调' + '\n' + '重试失败回调',
            apiMenu:'业务事件回调',
            apiFunDsc:'直接从失败列表移除，以后再也不重试' + '\n' + '重试失败的事件回调',
            show:false
          },
          {
            apiName:'/openplatform/message/update_event_callback_define',
            apiChinaName:'更新事件回调的定义信息',
            apiMenu:'业务事件回调',
            apiFunDsc:'更新事件回调的定义信息，更新URL时需要重新验证URL',
            show:false
          },
        ],
      }
    },


  }

</script>
