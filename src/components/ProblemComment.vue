<template>
  <div>
    <editor :value='value'></editor>
    <el-divider>所有评论</el-divider>
    <div v-for="item in this.comments" :key="item.id">
      <comment-item :comment="item" style="margin: 10px"></comment-item>
    </div>
  </div>
</template>

<script>
import CommentItem from './CommentItem'
import {getComment} from '../api/api'
import Editor from './Editor'

export default {
  name: 'ProblemComment',
  components: {CommentItem, Editor},
  data () {
    return {
      comments: [],
      value: ''
    }
  },
  created () {
    this.comments = getComment({pid: this.$route.params.id})
    console.log(this.comments)
  }
}
</script>

<style>
  .el-scrollbar__wrap {
    overflow-y: scroll;
    overflow-x: hidden;
    /*height: 100%;*/
  }
</style>
