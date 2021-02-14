<template>
  <el-card style="">
<!--    必刷榜的标题-->
    <span slot="header" style="font-size: 14px">
      🌋必刷榜
    </span>
<!--    展示前六的必刷题-->
    <div v-for="(item, key) in problems"
          :key="item.id"
          @click="goProblem(item)"
          style="">
      <el-row style="margin: 4%" class="blogs">
<!--        显示序号-->
        <el-col :span="1" :style="{color: key < 3 ? '#FFA116' : '#C4C4C6'}" class="rank">{{key + 1}}</el-col>
<!--        显示题目的名字-->
        <el-col :offset="2" :span="18">{{item.name}}</el-col>
<!--        显示题目难度-->
        <el-col :span="2">
          <el-tag :type="item.difficult === 1 ? 'success' : item.difficult === 2 ? '' : 'danger'"
                  size="small">{{difficultMapper.get(item.difficult)}}</el-tag>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
import { getTopList } from '../api/api'

export default {
  name: 'TopList',
  data () {
    return {
      problems: [],
      difficultMapper: this.$store.state.mapper.difficultMap
    }
  },
  methods: {
    goProblem (item) {
      // 点击题目后跳转到对应的题目
      this.$router.push({path: '/problem/' + item.id + '/detail'})
    }
  },
  created () {
    this.problems = getTopList(null)
  }
}
</script>

<style>
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
</style>
