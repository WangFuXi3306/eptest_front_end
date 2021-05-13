<template>
  <div >

    <div >
      <div class="line"></div>
      <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router>
<!--        <el-menu-item @click="toShow">导航</el-menu-item>-->
        <el-submenu>
          <template slot="title" >导航</template>
          <el-menu-item index="/callback">消息回调功能测试</el-menu-item>
          <el-menu-item index="/nologin">免登测试</el-menu-item>
          <el-menu-item index="/getContactUserInfo">获取员工信息测试</el-menu-item>
        </el-submenu>
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item style="float: right" index="/userInfoMain">
          欢迎回来：
          <el-avatar :size="20" :src="circleUrl"></el-avatar>
          {{lastName}}
        </el-menu-item>
      </el-menu>
    </div>

    <div v-show="navigationBarShow">
      <navigationBar/>
    </div>


  </div>


</template>

<script>
import navigationBar from "@/views/info/navigationBar";
import common from "~/common";
import Vue from "vue";


export default {
  components: {
    navigationBar,
    common,
  },

  name: "topNav",
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      navigationBarShow: false,
      lastName: window.localStorage.getItem('lastName'),   //真实姓名
      authCode: '0',
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      sizeList: ["large", "medium", "small"]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    toShow() {
      this.navigationBarShow = !this.navigationBarShow;
    },
    getLastName() {
      if (window.localStorage.getItem('lastName').toString() !== this.lastName) {
        alert(11);
        this.getCode2(this.getUserInfo);
      }

    },
    getUserInfo() {

      this.$get('/no-login/get-user-info',{
        auth_code:this.authCode,
      }).then(res => {
        let data = res.data.content.data;
        this.lastName = data.lastName;
        window.localStorage.removeItem('lastName');
        window.localStorage.setItem('lastName', this.lastName);

      })
    },
    getCode2(callback) {
      dd.ready(() => {
        dd.getAuthCode({
          corpId: "1"
        }).then(res => {
          window.console.log(JSON.stringify(res));
          this.authCode = res.code;
          callback();
        }).catch(err => {
          window.console.log(JSON.stringify(err));
          callback();
        });
      })
    },
  },
  mounted() {
    this.getLastName();
  },
  updated() {
    this.getLastName();
  },

  watch: {
  }
}
</script>

<style scoped>

</style>