<template>
    <div class="app">
      <router-view></router-view>
      <router-view name="templateedit"></router-view>
    </div>
</template>

<script type="text/javascript">
  import home from './pages/home.vue'
  import login from './pages/login.vue'
  export default {
   name:'App',
    components:{home}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .app{
    height:100%
  }
</style>
