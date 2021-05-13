<template>
  <div style="height: 300px;">
    <el-steps direction="vertical" :active="1">
      <el-step title="选择API目录" description="点击导航，选择测试项目所在的目录"></el-step>
      <el-step title="查看API接口信息" description="点击标题弹出下拉框查看API接口信息"></el-step>
      <el-step title="进行API接口测试" description="点击测试按钮，输入接口所需要的参数，获取接口返回的信息"></el-step>
    </el-steps>
  </div>
</template>

<script>
export default {
  name: "firstPage"
}
</script>

<style scoped>

</style>