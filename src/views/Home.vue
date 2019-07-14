<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import * as api from './../axios/api'
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    querydata() {
      api.getList().then(res => {

      }).catch(err => {
        console.log(err);
        
      })

    }
  },
  mounted() {
    this.querydata()
  },
}
</script>
<style lang="less" scoped>

</style>
