<template>

  <div >
    <el-table
    :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
    style="width: 100%">
    <el-table-column
      align="center"
      label="ID"
      width="50">
      <template slot-scope="scope">
        <span>{{ scope.row.date }}</span>
      </template>
    </el-table-column>

    <el-table-column
      align="center"
      label="标签"
      width="100">

      <template slot-scope="scope">
        <div slot="reference" class="name-wrapper">
          <el-tag size="medium" type="danger">{{ scope.row.name }}</el-tag>
        </div>
      </template>
    </el-table-column>

    <el-table-column
      align="center"
      label="报表名称"
      width="200">
      <template slot-scope="scope">
        <span style="margin-left: 10px" >{{ scope.row.bname }}</span>
      </template>
    </el-table-column>

    <el-table-column
      align="center"
      label="创建人"
      width="100">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.cname }}</span>
      </template>
    </el-table-column>

    <el-table-column
      align="center"
      property="time"
      label="创建时间"
      width="200">

    </el-table-column>

    <el-table-column label="操作"  >
      <template slot="header" slot-scope="scope">
          <router-link to="/home/templateedit">
            <el-button type="primary">
            新增
            </el-button>
          </router-link>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">修改</el-button>

          <router-link to="/home/templateshow">
            <el-button size="mini" type="danger" >
              查看
            </el-button>
          </router-link>

      </template>
    </el-table-column>

  </el-table>

    <el-pagination
      style="padding-top: 20px"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="1"
      :page-sizes="[8, 10, 15, 20]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length">
    </el-pagination>
  </div>
</template>

<script type="text/ecmascript-6">

  import bus from '../assets/eventBus'

  export default {
    name: "",
    data() {
      return {
        currentPage: '1',
        data: '',
        pagesize: 8,
        tableData: [
          {
            date: '01',
            name: 'EHR',
            bname: '人事信息导出',
            cname: '雷罡',
            time: '2019-01-01 09:00:00',
          },
          {
            date: '02',
            name: 'OA',
            bname: '里程碑任务信息',
            cname: '雷罡',
            time: '2019-01-01 09:00:00',
          },
          {
            date: '03',
            name: 'OA',
            bname: '通知公告信息',
            cname: '雷罡',
            time: '2019-01-01 09:00:00',
          },
          {
            date: '04',
            name: 'OA',
            bname: '审定信息情况分析',
            cname: '雷罡',
            time: '2019-01-01 09:00:00',
          },
          {
            date: '03',
            name: 'OA',
            bname: '通知公告信息',
            cname: '雷罡',
            time: '2019-01-01 09:00:00',
          },
          {
            date: '03',
            name: 'OA',
            bname: '通知公告信息',
            cname: '雷罡',
            time: '2019-01-01 09:00:00',
          },
          {
            date: '03',
            name: 'OA',
            bname: '通知公告信息',
            cname: '雷罡',
            time: '2019-01-01 09:00:00',
          },
          {
            date: '03',
            name: 'OA',
            bname: '通知公告信息',
            cname: '雷罡',
            time: '2019-01-01 09:00:00',
          },
          {
            date: '03',
            name: 'OA',
            bname: '通知公告信息',
            cname: '雷罡',
            time: '2019-01-01 09:00:00',
          },
          {
            date: '03',
            name: 'OA',
            bname: '通知公告信息',
            cname: '雷罡',
            time: '2019-01-01 09:00:00',
          },
          {
            date: '03',
            name: 'OA',
            bname: '通知公告信息',
            cname: '雷罡',
            time: '2019-01-01 09:00:00',
          },
          {
            date: '03',
            name: 'OA',
            bname: '通知公告信息',
            cname: '雷罡',
            time: '2019-01-01 09:00:00',
          },
          {
            date: '03',
            name: 'OA',
            bname: '通知公告信息',
            cname: '雷罡',
            time: '2019-01-01 09:00:00',
          },
        ]
      }
    },
    created() {
      this.pageList()
  },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleLook(index, row) {
        console.log(index, row);
      },
      addDm(){
        this.$router.push({
        })
      },
      pageList(){
        this.data = this.tableData
        this.getList()
      },
      getList(){
        let list = this.tableData.filter((item,index) =>item.data)
        this.list = list.filter((item,index) => index < this.currentPage * this.pagesize && index >= this.pagesize * (this.currentPage - 1))
      },
      handleSizeChange(val){
        this.pagesize = val
        this.getList()
      },
      handleCurrentChange(val){
        this.currentPage = val
        this.getList()
      }
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
