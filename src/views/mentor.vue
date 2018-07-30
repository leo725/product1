<template>
  <div class="main">
      <h1>mentor</h1>
      <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){
    
  },
  methods:{
    
  }
}
</script>

<style lang="less" scoped>

</style>
