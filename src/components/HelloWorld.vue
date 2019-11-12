<template>
  <div class="hello">
    <el-button type="text" @click="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <!--<router-link :to="'/foo/'+this.number">Go to Foo</router-link>-->
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        label="日期"
        width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="姓名"
        width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="dialogTableVisible=true">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="text" @click="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>

    <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
      <el-table :data="gridData">
        <el-table-column property="date" label="日期" width="150"></el-table-column>
        <el-table-column property="name" label="姓名" width="200"></el-table-column>
        <el-table-column property="address" label="地址"></el-table-column>
      </el-table>
    </el-dialog>
    <router-link to="/bar">Go to Bar</router-link>
    <router-view></router-view>
    <RadioGroup v-model="animal">
      <Radio :label="item.roleSeq" v-for="(item,index) in list3"  :key="index">{{item.roleName}}</Radio>

    </RadioGroup>
  </div>
</template>

<script>

  import bb from './b'
  import {a,b} from './a.js'
  console.log(bb.a(1,2))
  // console.log(bb.b())
  console.log('-----------------------')
export default {
  name: 'HelloWorld',
  created(){
    // window.location.href='www.baidu.com'
    this.animal=Number('7')
  },
  // beforeRouteLeave(to, from, next) {
  //   // console.log(to)
  //   to.meta.keepAlive = true;
  //   next();
  // },
  data () {
    return {
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      dialogTableVisible: false,
      dialogFormVisible: false,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      number:123,
      msg: 'Welcome to Your Vue.js App',
      animal: '',
      list:['金斑蝶','爪哇犀牛2','爪哇犀牛'],
      list2:[{a:"1",b:"1"},{a:"2",b:"2"},{a:"3",b:"3"},],
      list3:[{"roleSeq":1,"roleName":"role1"},{"roleSeq":2,"roleName":"role2"},{"roleSeq":3,"roleName":"总行操作员"},{"roleSeq":7,"roleName":"支行审核员"},{"roleSeq":201908169010000,"roleName":"2020"}]
    }
  },
  methods:{
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      // this.dialogTableVisible=true
      console.log(index, row);
    }
  },

 //  created(){
 //
 //
 //    let a=[1,2,3,4,5]
 //    a.forEach((item,index,a)=>{
 //    })
 //    a=a.map((item)=>{
 //      return item+item
 //    })
 //    console.log(a)
 // let b=[1,2,3,4,5]
 //  b=  b.filter((item)=>{
 //      return item>4
 //    })
 //    console.log('b'+b)
 //
 //    let aa=[,4,5,6,7,8,9,]
 //    let aa1=aa.every((item)=>{
 //       return item>4
 //    })
 //    console.log(aa1)
 //    console.log('--------------------------')
 //    let bb=[1,2,3,4,5,6,7,8,9]
 //  let bb1 = bb.reduce((pre,next,index,arr)=>{
 //         return pre+next
 //    })
 //
 //
 //  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
