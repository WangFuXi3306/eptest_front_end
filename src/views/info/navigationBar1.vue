<template>
  <nav class="title" role="navigation">
    <div class="container-fluid">
      <!--导航栏左边logo跟项目名称-->
      <div class="navbar-header">
        <a class="navbar_title" href="#" >项目名称</a>
      </div>
      <!--导航栏用户登录信息-->
      <div class="navbar_user">
        <img src="img/ani1.jpg"/>
        <span>您好，用户！</span>
      </div>
    </div>
  </nav>
  <div class="body" id="body">
    <div class="container">
      <div class="row">
        <!--左侧菜单栏-->
        <div class="col-md-1 menu">
          <ul class="nav menu_ul">
            <li v-for="(menu,index) in menus" v-bind:id="menu.id"
                v-bind:class="{checked: index == nowIndex}"
                v-on:click="setTab('menu',index,menus)">
              {{ menu.text }}
            </li>
          </ul>
        </div>
        <!--菜单切换主题-->
        <div class="col-md-11">
          <div v-if="menu_index == 1">菜单一的内容</div>
          <div v-if="menu_index == 2">菜单二的内容</div>
          <div v-if="menu_index == 3">菜单三的内容</div>
          <div v-if="menu_index == 4">菜单四的内容</div>
          <div v-if="menu_index == 5">菜单五的内容</div>
          <div v-if="menu_index == 6">菜单六的内容</div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer"></div>
</template>

<script>



export default {
  name: "navigationBar",
  data() {
    return {
      menus: [
        {text: '菜单一'},
        {text: '菜单二'},
        {text: '菜单三'},
        {text: '菜单四'},
        {text: '菜单五'},
        {text: '菜单六'}
      ],
      nowIndex: 0,
      menu_index: 1
    }
  },
  methods: {
    setTab: function(name,index,menus){
      this.nowIndex = index;
      //this.menu_index = index + 1;
    }
  }
}
</script>

<style scoped>

</style>