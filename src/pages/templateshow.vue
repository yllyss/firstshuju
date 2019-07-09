<template>
  <div style="width: 100%">
    <h3 class="title">{{this.$route.query.id + '：'}}</h3>
    <div class="seach">
      <el-form>
        <el-input v-model="searchData" placeholder="请输入搜索内容"  class="search"></el-input>
        <el-button type="primary" class="seachBtn el-icon-search" @click="search">搜索</el-button>
        <el-button type="info" class="seachBtn el-icon-download">下载</el-button>
      </el-form>
    </div>
    <template>
      <el-table
        :data="list"
        border
        style="width: 92.2%;margin: 25px;"
      >
        <el-table-column
          align="center"
          prop="id"
          label="ID"
          width="80">
        </el-table-column>
        <el-table-column
          align="center"
          prop="name"
          label="登入名"
          width="120">
        </el-table-column>
        <el-table-column
          align="center"
          prop="cName"
          label="中文名字"
          width="120">
        </el-table-column>
        <el-table-column
          align="center"
          prop="address"
          label="地址"
          width="564px">
        </el-table-column>
      </el-table>
    </template>
    <el-pagination
      style="margin: 25px"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="limit"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script type="text/javascript">
  import bus from '../assets/eventBus'
  import ElFormItem from "../../node_modules/element-ui/packages/form/src/form-item";
  var listJson = {
    list:[
      {
        id: '01',
        name: 'zhangsan',
        cName: '张三',
        address: '北京市东城区东直门外香河园路1号院万国城8号楼3层',
      },
      {
        id: '02',
        name: 'gaohan',
        cName: '张三',
        address: '北京市东城区东直门外香河园路1号院万国城8号楼3层',
      },
      {
        id: '03',
        name: 'zhangsan01',
        cName: '张三',
        address: '北京市东城区东直门外香河园路1号院万国城8号楼3层',
      },
      {
        id: '04',
        name: 'gaohan02',
        cName: '张三',
        address: '北京市东城区东直门外香河园路1号院万国城8号楼3层',
      },
      {
        id: '05',
        name: 'gaohan05',
        cName: '张三',
        address: '北京市东城区东直门外香河园路1号院万国城8号楼3层',
      },
      {
        id: '05',
        name: 'gaohan05',
        cName: '张三',
        address: '北京市东城区东直门外香河园路1号院万国城8号楼3层',
      },
      {
        id: '05',
        name: 'gaohan05',
        cName: '张三',
        address: '北京市东城区东直门外香河园路1号院万国城8号楼3层',
      },
      {
        id: '05',
        name: 'gaohan05',
        cName: '张三',
        address: '北京市东城区东直门外香河园路1号院万国城8号楼3层',
      },
      {
        id: '05',
        name: 'gaohan05',
        cName: '张三',
        address: '北京市东城区东直门外香河园路1号院万国城8号楼3层',
      },
      {
        id: '05',
        name: 'gaohan05',
        cName: '张三',
        address: '北京市东城区东直门外香河园路1号院万国城8号楼3层',
      },
      {
        id: '05',
        name: 'gaohan05',
        cName: '张三',
        address: '北京市东城区东直门外香河园路1号院万国城8号楼3层',
      },
    ]
  }

  export default {

    components: {ElFormItem},
    name: "templateeditshow",
    data() {
      return {
        searchData:'',
        list: [],
        data:[],
        limit:5,
        page:1,
        total: null,
        currentPage:1, //初始页
        pagesize:10,    //    每页的数据
        userList: []
      }
    },
    mounted(){},
    created() {
      this.pageList()
    },
    methods: {
      pageList(){
        this.data = listJson.list
        this.getList()
      },
      getList(){
        let list = this.data.filter((item,index) =>item.name.includes(this.searchData))
        this.list = list.filter((item,index) => index < this.page * this.limit && index >= this.limit * (this.page - 1))
        this.total = list.length
      },
      // 当每页数量改变
      handleSizeChange(val) {
        this.limit = val
        this.getList()
      },
      // 当当前页改变
      handleCurrentChange(val) {
        this.page = val
        this.getList()
      },
      search(){
        this.page=1
        this.getList()
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .title{
      color red
      padding 20px 0 0 25px
  }
  .el-menu{
    border-right:none !important;
  }
  .home{
    height 100%;
    .el-container{
      height 100%;
      .el-aside{
        background #37474F
        .logo{
          width 160px
          height 44px
          background:url("https://css.firstcare.com.cn/assets/images/logo_light.png");
          background-size:73.5px 16px
          background-position:center;
          background-repeat no-repeat
        }
      }
      .el-header{
        height 44px!important;
        background #37474F
      }
    }
  }
  .seach{
    margin 25px

    .search{
      width 47%
      margin-right 10px
    }
    .seachBtn{
      width 10%
    }
  }
</style>
