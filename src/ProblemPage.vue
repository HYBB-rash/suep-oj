<template>
  <el-container>
<!--    功能区-->
    <el-aside style="width: 30%;margin-left: 20px;margin-top: 20px">
      <function-pane></function-pane>
<!--      测试区-->
      <el-divider></el-divider>
      <example v-for="(item) in examples"
               :key="item.id"
               :id="item.id"
               :custom="true"
               class="example"
               :input="item.input"
               :output="item.output"></example>
      <example :custom="false"
               class="example"></example>
    </el-aside>
    <el-main style="margin-right: 20px;">
      <div style="margin-top: 10px;margin-left: 3%;">
        <el-card>
          <markdown-page></markdown-page>
        </el-card>
        <el-card style="background-color: #F7F7F7;padding: 1%;margin-top: 10px">
          <edit-function-pane></edit-function-pane>
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
import {getTestExample} from './api/api'
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
    this.examples = getTestExample(null, this.$route.params.id)
  }
}
</script>

<style>
  .el-main {
    padding: 0;
  }
  .example {
    margin-top: 3%;
    margin-bottom: 3%;
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
</style>
