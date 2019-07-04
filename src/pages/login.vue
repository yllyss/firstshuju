<template>
  <div class="login">
    <el-form :model="form"  ref="form">
      <el-form-item>
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-button style="width:100%" type="primary" plain>登录</el-button>
    </el-form>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: "login",
    data(){
      return{
        form:{
          name:''
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .login{
    width:100%;
    height:100%;
    background #2f4050;
    .el-form{
      width:400px;
      padding:20px;
      background:#fff;
      position absolute;
      top 50%
      left 50%
      transform translate(-50%,-50%)
    }
  }
</style>
