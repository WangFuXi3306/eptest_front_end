<template>
  <div>
    <div v-for="(v, index) in funList" :key="index" class="selectList" >
      <div  style="border: 1px; box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)">
        <div style="display: flex; justify-content: center; ">
            <el-link class="onclickTitle"  @click="getShow(describeList[index])">
              {{v.text}}
            </el-link>
              <el-button type="primary" round   @click='goToPath(v.router)'>测试</el-button>
          </div>
        <div class="dropdown" v-show ="describeList[index].show">
          <div>
            <div class="describeTitle">API 目录：
              <div class="miniDescribe">{{describeList[index].apiMenu}}</div>
            </div>
            <div class="describeTitle">API 名称：
              <div class="miniDescribe">{{describeList[index].apiName}}</div>
            </div>
            <div class="describeTitle">API 中文名称：
              <div class="miniDescribe">{{describeList[index].apiChinaName}}</div>
            </div>
            <div class="describeTitle">API 功能描述：
              <div class="miniDescribe">{{describeList[index].apiFunDsc}}</div>
            </div>
          </div>
        </div>
      </div>
  </div>

  </div>
</template>

<script>
import Vue from 'vue';
import { Popover } from 'vant';
Vue.use(Popover);

export default {
  name: "selectList",
  props: ['funList', 'describeList'],
  methods: {
    goToPath(path) {
      this.$router.push(path);
    },
    getShow(item){
      item.show=!item.show;
    },
  }
}
</script>

<style scoped>

</style>