<template>
  <el-container>
<!--    功能区-->
    <el-aside :style="style.aside">
      <function-pane :pid="this.$route.params.id"></function-pane>
<!--      测试区-->
      <el-card :style="style.elCard">
        <el-main style="height: 650px;">
          <el-scrollbar style="height: 100%">
<!--            根据用户选择刷新功能面板-->
            <router-view></router-view>
          </el-scrollbar>
        </el-main>
      </el-card>
    </el-aside>
<!--    编辑区-->
    <el-main style="margin-right: 20px;padding: 0">
      <div style="margin-top: 20px;margin-left: 3%;">
        <el-card :style="style.editCard">
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
      language: 'java',
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
      copyright: '',
      style: {
        aside: {width: '45%', marginLeft: '20px', marginRight: '20px'},
        elScrollbar__wrap: {overflowY: 'scroll', overflowX: 'hidden'},
        elCard: {minHeight: '72px', borderRadius: '16px'},
        card: {margin: '10px', backgroundSize: '100% 100%'},
        editCard: {
          backgroundColor: '#F0F0F0',
          padding: '1%',
          minHeight: '72px',
          borderRadius: '16px'
        }
      }
    }
  },
  methods: {
  },
  created () {
  }
}
</script>

<style>
</style>
