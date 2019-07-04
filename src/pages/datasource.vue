<template>
  <div>
  <el-table
    :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
    stripe
    style="width: 100%">
    <el-table-column
      prop="date"
      label="ID"
      width="180">
    </el-table-column>
    <el-table-column
      prop="sjybm"
      label="数据源编码"
      width="180">
    </el-table-column>
    <el-table-column
      prop="sjyms"
      label="数据源描述">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>


  </el-table>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="1"
      :page-sizes="[10, 15, 20]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length">
    </el-pagination>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "datasource",
    data() {
      return {
        currentPage: '1',
        data: '',
        pagesize: 10,
        tableData: [
          {
          date: '100001',
          sjybm: 'soa',
          sjyms: '接口平台',
          address:'127.0.0.1'
        },
          {
          date: '100002',
          sjybm: 'hr',
          sjyms: '人力资源',
          address:'127.0.0.1'
        },
          {
          date: '100003',
          sjybm: 'contract',
          sjyms: '合同管理',
          address:'127.0.0.1'
        },
          {
          date: '100004',
          sjybm: 'budget',
          sjyms: '预算系统',
          address:'127.0.0.1'
        },
          {
          date: '100003',
          sjybm: 'contract',
          sjyms: '合同管理',
          address:'127.0.0.1'
        },
          {
          date: '100003',
          sjybm: 'contract',
          sjyms: '合同管理',
          address:'127.0.0.1'
        },
          {
          date: '100003',
          sjybm: 'contract',
          sjyms: '合同管理',
          address:'127.0.0.1'
        },
          {
          date: '100003',
          sjybm: 'contract',
          sjyms: '合同管理',
          address:'127.0.0.1'
        },
          {
          date: '100003',
          sjybm: 'contract',
          sjyms: '合同管理',
          address:'127.0.0.1'
        },
          {
          date: '100003',
          sjybm: 'contract',
          sjyms: '合同管理',
          address:'127.0.0.1'
        },
          {
          date: '100003',
          sjybm: 'contract',
          sjyms: '合同管理',
          address:'127.0.0.1'
        },
          {
          date: '100003',
          sjybm: 'contract',
          sjyms: '合同管理',
          address:'127.0.0.1'
        },
          {
          date: '100003',
          sjybm: 'contract',
          sjyms: '合同管理',
          address:'127.0.0.1'
        },
          {
          date: '100003',
          sjybm: 'contract',
          sjyms: '合同管理',
          address:'127.0.0.1'
        },
          {
          date: '100003',
          sjybm: 'contract',
          sjyms: '合同管理',
          address:'127.0.0.1'
        },
          {
          date: '100003',
          sjybm: 'contract',
          sjyms: '合同管理',
          address:'127.0.0.1'
        },
          {
          date: '100003',
          sjybm: 'contract',
          sjyms: '合同管理',
          address:'127.0.0.1'
        },
          {
          date: '100003',
          sjybm: 'contract',
          sjyms: '合同管理',
          address:'127.0.0.1'
        },
        ]
      }
    },
    created() {
      this.pageList()
    },
    methods:{
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
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
