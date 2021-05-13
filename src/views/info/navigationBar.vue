<template>
<!--  <el-row class="tac">
    <el-col :span="24">-->
<!--  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
    <el-radio-button :label="false">展开</el-radio-button>
    <el-radio-button :label="true">收起</el-radio-button>
  </el-radio-group>-->
      <div>
        <el-menu
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
            default-active="1"
            class="el-menu-vertical-demo"
            unique-opened
            router>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>测试功能选择</span>
            </template>
            <el-menu-item-group>
              <template slot="title"></template>
              <el-menu-item index="/callback">消息回调功能测试</el-menu-item>
              <el-menu-item index="/nologin">免登测试</el-menu-item>
              <el-menu-item index="/getContactUserInfo">获取员工信息测试</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>用户信息</span>
            </template>
            <el-menu-item-group>
              <template slot="title"></template>
              <el-menu-item index="/userInfoMain">查看用户信息</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </div>
<!--    </el-col>
  </el-row>-->
</template>

<script>



export default {
  name: "navigationBar",
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
