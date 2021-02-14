<template>
  <div>
    <div style="">
      <h1 slot="header">
        📖题解
      </h1>
      <div v-for="(item, key) in blogs.list"
            :key="item.id"
           @click="goAnswerPage"
            style="">
      <el-row style="margin: 4%">
        <el-col :span="1"
                :style="{color: key < 3 ? '#FFA116' : '#C4C4C6'}" class="rank">{{key + 1}}</el-col>
        <el-col :offset="1" :span="21">
          <el-row>
            <el-col :span="1">
              <el-avatar :size="30" :src="item.icon"></el-avatar>
            </el-col>
            <el-col :offset="1" :span="22" class="title">
              <span style="font-size: 20px;font-weight: bolder">{{item.title}}</span>
            </el-col>
          </el-row>
          <el-row class="content">
            <span style="font-size: 12px;color: #C4C4C6">{{item.content}}</span>
          </el-row>
        </el-col>
      </el-row>
    </div>
    </div>
    <el-pagination
      background
      style="margin-top: 10px; text-align: center"
      layout="prev, pager, next"
      :current-page.sync="index"
      @current-change="changePage"
      :page-size="size"
      :total="blogs.count">
    </el-pagination>
  </div>
</template>

<script>
import {getAnswerTopList} from '../api/api'

export default {
  name: 'AnswerList',
  data () {
    return {
      index: 1,
      size: 6,
      blogs: {
        count: 0,
        list: []
      }
    }
  },
  methods: {
    changePage () {
      this.blogs = getAnswerTopList(null, this.$route.params.id, this.index, this.size)
    },
    goAnswerPage () {
      this.$router.push({path: '/problem/1/answer/1'})
    }
  },
  created () {
    this.blogs = getAnswerTopList(null, this.$route.params.id, this.index, this.size)
  }
}
</script>

<style scoped>
.rank {
  font-size: 14px;
  line-height: 20px;
  min-width: 10px;
  font-family: TypoRound;
  /*margin-left: 3%;*/
  font-style: italic;
  font-weight: 700;
  transform: translateY(1px);
  color: #FFA116;
}
.content{
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.title{
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}
</style>
