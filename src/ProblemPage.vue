<template>
  <el-container>
<!--    功能区-->
    <el-aside style="width: 45%;margin-left: 20px;margin-top: 20px">
      <function-pane :pid="this.$route.params.id"></function-pane>
<!--      测试区-->
      <el-card>
        <el-main style="height: 650px;">
          <el-scrollbar style="height: 100%">
<!--            根据用户选择刷新功能面板-->
            <router-view></router-view>
          </el-scrollbar>
        </el-main>
      </el-card>
    </el-aside>
<!--    编辑区-->
    <el-main style="margin-right: 20px;">
      <div style="margin-top: 40px;margin-left: 3%;">
        <el-card style="background-color: #F0F0F0;padding: 1%;margin-top: 10px">
<!--          编辑功能按钮-->
          <edit-function-pane></edit-function-pane>
<!--          编辑框,利用开源vscode的编辑器-->
          <code-edit :language="language"
                     :value="code"></code-edit>
        </el-card>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import CodeEdit from './components/CodeEdit'
import MarkdownPage from './components/MarkdownPage'
import Example from './components/Example'
import FunctionPane from './components/FunctionPane'
import EditFunctionPane from './components/EditFunctionPane'

export default {
  name: 'ProblemPage',
  components: {EditFunctionPane, FunctionPane, Example, MarkdownPage, CodeEdit},
  data () {
    return {
      language: 'cpp',
      languages: [
        {value: 'python', label: 'Python 3'},
        {value: 'c', label: 'C (gcc)'},
        {value: 'cpp', label: 'C++ (g++)'},
        {value: 'java', label: 'Java'}],
      examples: [],
      code: null,
      compilerTip: false,
      historyTip: false,
      settingTip: false,
      helpTip: false,
      compiler: '',
      copyright: ''
    }
  },
  methods: {

  },
  created () {
  }
}
</script>

<style>
  .el-main {
    padding: 0;
  }
  .card {
    margin: 10px;
    background-size: 100% 100%;
    /*height: 100px;*/

  }
  .cardBackground {
    background-size: 100% 100%;
  }
  .el-card {
    min-height: 72px;
    border-radius: 16px;
  }
  .el-scrollbar__wrap {
    overflow-y: scroll;
    overflow-x: hidden;
    /*height: 100%;*/
  }
</style>
