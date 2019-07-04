<template>
  <div class="home">
    <el-container>
      <div class="logo"></div>
      <el-container>
        <el-header>
          <div class="header">
            <el-menu
              :default-active="this.$router.path"
              :router="true"
              class="el-menu-demo"
              mode="horizontal"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
              <el-menu-item v-for="(item,i) in navList" :key="i" :index="'/home' + item.name">
                <i class="el-icon-share"></i>
                <span slot="title">{{item.navItem}}</span>
              </el-menu-item>

            </el-menu>
          </div>
        </el-header>
        <el-main>
          <div class="content">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: "home",
    data() {
      return {
        navList:[
          {name:'/datasource',navItem:'数据源'},
          {name:'/template',navItem:'报表任务'},
        ]
      }
    },


  }

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

  .el-header{
    padding 0
    width:100%
    background:#545C64

    .header{
      width:960px
      margin: 0 auto
    }
  }
  .el-menu-demo{
    width 100%
  }
  .el-menu{
    border-right:none !important;
  }
  .home{
    background:#F4F5F5
    height 100%;
    .content{
      width:960px
      margin: 0 auto
    }
    .el-container{
      height 100%;
      .el-aside{
        background #37474F

      }

    }
  }
  .seach{
    margin 25px

    .input-with-select{
      width 47%
      margin-right 10px
    }
    .seachBtn{
      width 10%
    }
  }
  .el-main{
    padding:0
  }
</style>
