<template>
  <el-card style="">
    <div v-for="(item, key) in blogs"
          :key="item.id"
         @click="goBlog"
          style="">
      <el-row style="margin: 4%">
        <el-col :span="1"
                :style="style.rank">
          <div :style="{color: key < 3 ? '#FFA116' : '#C4C4C6'}">
            {{key + 1}}
          </div>
        </el-col>
        <el-col :span="20">
          <el-row>
            <el-col :span="2">
              <el-avatar :size="40" :src="item.icon"></el-avatar>
            </el-col>
            <el-col :span="20" :style="style.title">
              <span style="font-size: 18px;font-weight: bold">{{item.title}}</span>
            </el-col>
          </el-row>
          <el-row :style="style.content">
            <span style="font-size: 12px;color: #C4C4C6">{{item.content}}</span>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <div style="text-align: center">
        <el-pagination background style="margin-top: 100px"
        layout="prev, pager, next" :current-page.sync="index"
        @current-change="changePage" :page-size="size"
        :total="blogs.length"></el-pagination>
    </div>
  </el-card>
</template>

<script>
import {getBlogTopList} from '../api/api'

export default {
  name: 'BlogList',
  data () {
    return {
      blogs: [],
      difficultMapper: this.$store.state.mapper.difficultMap,
      index: 0,
      size: 6,
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
    goBlog () {
      this.$router.push({path: '/demo'})
    },
    changePage () {
      this.blogs = getBlogTopList({
        index: this.index,
        size: this.size
      })
    }
  },
  created () {
    this.blogs = getBlogTopList({
      index: this.index,
      size: this.size
    })
  }
}
</script>

<style scoped>
.el-card{
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  user-select: none;
  min-width: 200px;
}
</style>
