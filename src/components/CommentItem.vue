<template>
  <div>
    <el-row :style="style.VerticalCenter">
      <el-col :span="12">
        <el-row>
          <el-col :span="4">
            <el-avatar :size="30" :src="comment.icon"></el-avatar>
          </el-col>
          <el-col style="height: 30px;padding-top: 10px; padding-bottom: 10px;"
                  :span="4">{{comment.name}}</el-col>
        </el-row>
      </el-col>
      <el-col :offset="8" :span="4" :style="style.VerticalCenter">
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
        <span :style="style.functionStyle">😆{{comment.love}}</span>
        <span :style="style.functionStyle">😡踩</span>
        <span :style="style.functionStyle">👁‍🗨查看回复</span>
        <span :style="style.functionStyle">🔠回复</span>
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
      style: {
        elScrollbar__wrap: {
          overflowY: 'scroll',
          overflowX: 'hidden',
          height: '100%'
        },
        functionStyle: {
          fontSize: '14px',
          color: '#8c8c8c',
          marginRight: '10px'
        },
        VerticalCenter: {
          height: '20px',
          paddingTop: '10px',
          marginBottom: '20px'
        }
      }
    }
  },
  created () {
    console.log(this.$props.comment)
  }
}
</script>

<style scoped>
</style>
