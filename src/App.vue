<template>
  <div>
    <div id="app" >

      <div style="display: flex; justify-content: center; margin-top: -50px">
        <img alt="Vue logo" src="./assets/jmkj.png">
<!--        <img alt="Vue logo1" src="./assets/platformLogo1.png">-->
        <div style="line-height: 50px; font-size: 30px; margin-top: 5px">政务钉钉接口测试平台</div>
      </div>



      <div style="position: relative">

        <div style="z-index:99; position: absolute; width: 100%" v-show="true">
          <topNav/>
        </div>

        <br/><br/><br/><br/>

        <div  style="position: absolute; width: 100%">
<!--          <div style="float: left; line-height: 40px; left:0px; font-size: 17px; position:absolute; margin-left: 20px" >当前页面：{{currentRouteName}}</div>-->
          <div>
            <el-page-header @back="gotoBack"  :content="currentRouteName">
            </el-page-header>
          </div>
          <br/>

          <div >
            <br/>
            <router-view/>
          </div>

<!--          <br/>
            <el-button type="info" style="float:right; height: 40px"  @click='gotoBack'>返回</el-button>-->

        </div>

      </div>


    </div>
  </div>

</template>

<script>
import topIndex from './views/indexViews/topIndex';
import navigationBar from "@/views/info/navigationBar";
import topNav from "@/views/info/topNav";

export default {
  name: 'app',
  components: {
    topIndex,
    navigationBar,
    topNav,
  },
  data() {
    return {
      currentRouteName: "",
    }
  },
  mounted() {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = 'https://g.alicdn.com/gdt/jsapi/1.3.2/index.js';
    document.body.appendChild(s);
  },
  methods: {
    fetchData1 () {
      window.console.log(this.$router.currentRoute.name);
      this.currentRouteName = this.$router.currentRoute.name;
    },
    gotoBack() {
      this.$router.go(-1);
    },

  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchData1'
  },

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
