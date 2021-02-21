<template>
  <div>
    <el-row class="VerticalCenter">
      <el-col :span="12">
        <el-row>
          <el-col :span="4">
            <el-avatar :size="30" :src="comment.icon"></el-avatar>
          </el-col>
          <el-col style="height: 30px;padding-top: 10px; padding-bottom: 10px;"
                  :span="4">{{comment.name}}</el-col>
        </el-row>
      </el-col>
      <el-col :offset="8" :span="4" class="VerticalCenter">
        <div style="font-size: 14px; color: #C4C4C6">{{comment.time}}</div>
      </el-col>
    </el-row>
    <div style="height: 150px;">
      <el-main style="width: 100%;height: 150px;">
        <el-scrollbar style="height: 100%;">
          <markdown-page :data="comment.content"></markdown-page>
        </el-scrollbar>
      </el-main>
    </div>
    <div style="margin-top: 5px;margin-bottom: 10px;">
<!--      评论元素下方的案件-->
      <el-row :gutter="20">
        <span class="functionStyle">😆{{comment.love}}</span>
        <span class="functionStyle">😡踩</span>
        <span class="functionStyle">👁‍🗨查看回复</span>
        <span class="functionStyle">🔠回复</span>
      </el-row>
    </div>
  </div>
</template>

<script>
import MarkdownPage from './MarkdownPage'
export default {
  name: 'CommentItem',
  components: {MarkdownPage},
  props: ['comment'],
  data () {
    return {
    }
  },
  created () {
    console.log(this.$props.comment)
  }
}
</script>

<style>
  .VerticalCenter {
    height: 20px;
    padding-top: 10px;
    margin-bottom: 20px;
    /*display: flex; justify-content: center; flex-direction: column;*/
  }
  .el-scrollbar__wrap {
    overflow-y: scroll;
    overflow-x: hidden;
    height: 100%;
  }
  .functionStyle {
    font-size: 14px;
    color: #8C8C8C;
    margin-right: 10px;
  }
</style>
