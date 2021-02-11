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
          <markdown-page></markdown-page>
        </el-scrollbar>
      </el-main>
    </div>
    <div style="margin-top: 25px;margin-bottom: 10px;">
      <el-row :gutter="20">
        <span class="functionStyle">😆100</span>
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
  data () {
    return {
      comment: {
        id: 1,
        name: 'hyong',
        icon: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        time: '2021-02-10',
        content: '这题还算可以，比较简单'
      }
    }
  }
}
</script>

<style>
  .VerticalCenter {
    height: 40px;
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
