<template>
  <el-container :style="style.container">
    <el-main>
<!--      主页的题库列表-->
      <problem-list></problem-list>
    </el-main>
    <el-aside :style="style.aside">
<!--      必刷榜榜单-->
      <top-list></top-list>
<!--      博客排行榜-->
      <blog-top-list :style="style.blogTopList"></blog-top-list>
    </el-aside>
  </el-container>
</template>

<script>
import ProblemList from './components/ProblemList'
import TopList from './components/ProblemTopList'
import BlogTopList from './components/BlogTopList'

export default {
  name: 'ProblemListIndex',
  components: {ProblemList, TopList, BlogTopList},
  data () {
    return {
      style: {
        container: {marginLeft: '8%', marginRight: '8%'},
        aside: {marginTop: '10px'},
        blogTopList: {marginTop: '4%'}
      }
    }
  },
  methods: {
  }
}
</script>

<style>

</style>
