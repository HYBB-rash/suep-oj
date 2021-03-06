<template>
  <div>
    <div style="">
      <h1 slot="header">
        📖题解
      </h1>
      <div v-for="(item, key) in blogs.list"
            :key="item.id"
           @click="goAnswerPage(item.id)"
            style="">
      <el-row style="margin: 4%">
        <el-col :span="1"
                :style="style.rank">
          <div :style="{color: key < 3 ? '#FFA116' : '#C4C4C6'}">
            {{key + 1}}
          </div>
        </el-col>
        <el-col :offset="1" :span="21">
          <el-row>
            <el-col :span="1">
              <el-avatar :size="30" :src="item.icon"></el-avatar>
            </el-col>
            <el-col :offset="1" :span="22" :style="style.title">
              <span style="font-size: 20px;font-weight: bolder">{{item.title}}</span>
            </el-col>
          </el-row>
          <el-row :style="style.content">
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
      },
      style: {
        rank: {
          fontSize: '14px',
          lineHeight: '20px',
          minWidth: '10px',
          fontFamily: 'TypoRound',
          fontStyle: 'italic',
          fontWeight: '700',
          transform: 'translateY(1px)',
          color: '#FFA116'
        },
        content: {
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          webkitLineClamp: 1,
          webkitBoxOrient: 'vertical'
        },
        title: {
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }
      }
    }
  },
  methods: {
    changePage () {
      this.blogs = getAnswerTopList(null, this.$route.params.id, this.index, this.size)
    },
    goAnswerPage (aid) {
      this.$router.push({path: '/problem/1/answer/' + aid})
    }
  },
  created () {
    this.blogs = getAnswerTopList(null, this.$route.params.id, this.index, this.size)
  }
}
</script>

<style scoped>
</style>
