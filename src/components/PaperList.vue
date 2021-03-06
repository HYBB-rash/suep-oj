<template>
  <div>
    <el-table :data="paperList" style="width: 100%;">
        <el-table-column width="40" prop="status">
          <template slot-scope="scope">
            <span>
              {{scope.row.status === 1 ? '通过' : '未通过'}}
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="题目名"></el-table-column>
        <el-table-column prop="watch" label="浏览量"></el-table-column>
        <el-table-column prop="love" label="点赞量"></el-table-column>
        <el-table-column prop="comment" label="评论量"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click='edit(scope.row.id)'>编辑</el-button>
            <el-button @click='del(scope.row.id)'>删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="text-align: center">
        <el-pagination background style="margin-top: 100px"
        layout="prev, pager, next" :current-page.sync="index"
        @current-change="changePage" :page-size="size"
        :total="paperList.length"></el-pagination>
      </div>
  </div>
</template>

<script>
import {getPaperList} from '../api/api'

export default {
  name: 'PaperList',
  data () {
    return {
      paperList: [],
      index: 0,
      size: 6
    }
  },
  methods: {
    changePage () {
      this.paperList = getPaperList({
        id: 1,
        index: this.index,
        size: this.size
      })
    },
    edit (id) {
      this.$router.push({path: '/edit'})
    },
    del (id) {
      console.log(id)
      console.log('delete')
    }
  },
  created () {
    this.paperList = getPaperList({
      id: 1,
      index: this.index,
      size: this.size
    })
    console.log(this.paperList)
  }
}
</script>

<style scoped>

</style>
