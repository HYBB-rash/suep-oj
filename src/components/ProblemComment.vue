<template>
  <div>
    <mavon-editor :ishljs="true"
                  :scroll-style="true"
                  v-model="value"
                  style="min-height: 150px;margin-bottom: 40px;"
                  :toolbars="toolbars">
    </mavon-editor>
    <el-divider>所有评论</el-divider>
    <div v-for="item in this.comments" :key="item.id">
      <comment-item :comment="item" style="margin: 10px"></comment-item>
    </div>
  </div>
</template>

<script>
import CommentItem from './CommentItem'
import {getComment} from '../api/api'

export default {
  name: 'ProblemComment',
  components: {CommentItem},
  data () {
    return {
      comments: [],
      value: '',
      toolbars: {
        bold: true, // 粗体
        italic: false, // 斜体
        header: true, // 标题
        underline: false, // 下划线
        strikethrough: false, // 中划线
        mark: false, // 标记
        superscript: false, // 上角标
        subscript: false, // 下角标
        quote: false, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: false, // 图片链接
        code: true, // code
        table: false, // 表格
        fullscreen: false, // 全屏编辑
        readmodel: false, // 沉浸式阅读
        htmlcode: false, // 展示html源码
        help: false, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: false, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: false, // 导航目录
        /* 2.1.8 */
        alignleft: false, // 左对齐
        aligncenter: false, // 居中
        alignright: false, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true // 预览
      }
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
