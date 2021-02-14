<template>
  <div>
    <markdown-page></markdown-page>
    <el-divider style="margin-bottom: 20px;">评论区</el-divider>
    <problem-comment></problem-comment>
  </div>
</template>

<script>
import MarkdownPage from './MarkdownPage'
import ProblemComment from './ProblemComment'
export default {
  name: 'AnswerPage',
  components: {ProblemComment, MarkdownPage}
}
</script>

<style scoped>

</style>
