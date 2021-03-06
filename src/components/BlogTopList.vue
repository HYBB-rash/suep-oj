<template>
  <el-card style="">
    <span slot="header" style="font-size: 14px">
      📖必读榜
    </span>
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
        <el-col :offset="2" :span="20">
          <el-row>
            <el-col :span="2">
              <el-avatar :size="20" :src="item.icon"></el-avatar>
            </el-col>
            <el-col :offset="2" :span="20" :style="style.title">
              <span style="font-size: 14px;font-weight: 500">{{item.title}}</span>
            </el-col>
          </el-row>
          <el-row :style="style.content">
            <span style="font-size: 12px;color: #C4C4C6">{{item.content}}</span>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
import {getBlogTopList} from '../api/api'

export default {
  name: 'BlogTopList',
  data () {
    return {
      blogs: [],
      difficultMapper: this.$store.state.mapper.difficultMap,
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
      console.log('demo')
      this.$router.push({path: '/demo'})
    }
  },
  created () {
    this.blogs = getBlogTopList(null)
  }
}
</script>

<style scoped>

</style>
