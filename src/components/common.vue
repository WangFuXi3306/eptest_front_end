<template>

</template>

<script>
export default {
  name: "common",
  data() {
    return {
      httpUrl : 'http://39.105.17.99:8080/',
      lastName :""
    }
  },
  methods: {
    commonFun() {
      console.log("公共方法")
    }
  }
}
</script>

<style scoped>

</style>