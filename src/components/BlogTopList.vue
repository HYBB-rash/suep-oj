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
                :style="{color: key < 3 ? '#FFA116' : '#C4C4C6'}" class="rank">{{key + 1}}</el-col>
        <el-col :offset="2" :span="20">
          <el-row>
            <el-col :span="2">
              <el-avatar :size="20" :src="item.icon"></el-avatar>
            </el-col>
            <el-col :offset="2" :span="20" class="title">
              <span style="font-size: 14px;font-weight: 500">{{item.title}}</span>
            </el-col>
          </el-row>
          <el-row class="content">
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
      difficultMapper: this.$store.state.mapper.difficultMap
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
.el-card{
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  user-select: none;
  min-width: 200px;
}
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
  -webkit-line-clamp: 2;
-webkit-box-orient: vertical;
}
.title{
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}
</style>
