<template>
  <div>
    <markdown-page :data='content'></markdown-page>
    <el-divider style="margin-bottom: 20px;">评论区</el-divider>
    <problem-comment></problem-comment>
  </div>
</template>

<script>
import MarkdownPage from './MarkdownPage'
import ProblemComment from './ProblemComment'
import {getPaperContent} from '../api/api'

export default {
  name: 'PaperPage',
  components: {ProblemComment, MarkdownPage},
  data () {
    return {
      content: ''
    }
  },
  created () {
    const item = getPaperContent({aid: this.$route.params.aid})
    this.content = item.content
  }
}
</script>

<style scoped>

</style>
