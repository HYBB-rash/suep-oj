<template>
  <el-container style="margin-left: 8%; margin-right: 8%">
    <el-main>
      <problem-list></problem-list>
    </el-main>
    <el-aside>
      <top-list></top-list>
      <blog-top-list style="margin-top: 4%"></blog-top-list>
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
    return {}
  },
  methods: {
  }
}
</script>

<style>

</style>
