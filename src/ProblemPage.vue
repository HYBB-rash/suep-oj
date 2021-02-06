<template>
  <el-tabs v-model="activeName"
           style=""
           type="border-card" @tab-click="handleClick">
    <el-tab-pane label="题目详情" name="first">题目详情</el-tab-pane>
    <el-tab-pane label="评论" name="second">评论</el-tab-pane>
    <el-tab-pane label="题解" name="third">题解</el-tab-pane>
    <el-tab-pane label="提交记录" name="fourth">提交记录</el-tab-pane>
    <code-edit></code-edit>
  </el-tabs>
</template>

<script>
import CodeEdit from './components/CodeEdit'
export default {
  name: 'ProblemPage',
  components: {CodeEdit}
}
</script>

<style>
  .el-main {
    padding: 0;
  }
</style>
