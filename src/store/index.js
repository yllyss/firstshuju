import Vue from 'vue'
import Vuex from 'vuex'

//使用vuex
Vue.use(Vuex)



//创建Vuex实例

const store = new Vuex.Store({



  state:{
    count:1

  }
})

//导出store
export default store
