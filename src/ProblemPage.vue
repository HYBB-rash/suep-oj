<template>
  <el-container>
    <el-aside>demo</el-aside>
    <el-main>
      <div style="margin-top: 5%;margin-right: 15%;">
        <el-card><markdown-page></markdown-page></el-card>
        <el-card style="background-color: #F0F0F0;padding: 1%">
          <el-select v-model="language" style="margin-bottom: 1%;">
            <el-option v-for="item in languages"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value">
            </el-option>
          </el-select>
          <i class="el-icon-warning-outline iconMargin"></i>
          <i class="el-icon-time iconMargin"></i>
          <i class="el-icon-setting iconMargin"></i>
          <i class="el-icon-question iconMargin"></i>
          <code-edit :language="language"></code-edit>
        </el-card>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import CodeEdit from './components/CodeEdit'
import MarkdownPage from './components/MarkdownPage'
export default {
  name: 'ProblemPage',
  components: {MarkdownPage, CodeEdit},
  data () {
    return {
      language: null,
      languages: [
        {value: 'python', label: 'python'},
        {value: 'c', label: 'c'},
        {value: 'cpp', label: 'cpp'},
        {value: 'java', label: 'java'}]
    }
  }
}
</script>

<style>
  .el-main {
    padding: 0;
  }
  .iconMargin {
    margin: 1%;
  }
</style>
