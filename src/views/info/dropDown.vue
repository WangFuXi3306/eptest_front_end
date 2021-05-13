<template>
  <div>
    <div class="describeTitle">API 目录：
      <div class="miniDescribe">{{apiMenu1}}</div>
    </div>
    <div class="describeTitle">API 名称：
      <div class="miniDescribe">{{apiName1}}</div>
    </div>
    <div class="describeTitle">API 中文名称：
      <div class="miniDescribe">{{apiChinaName1}}</div>
    </div>
    <div class="describeTitle">API 功能描述：
      <div class="miniDescribe">{{apiFunDsc1}}</div>
    </div>
  </div>

</template>

<script>
export default {
  name: "DropDown",

  props:["apiMenu1", "apiName1", "apiChinaName1", "apiFunDsc1"]
}
</script>

<style scoped>

</style>