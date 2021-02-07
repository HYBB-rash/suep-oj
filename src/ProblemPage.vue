<template>
  <el-container>
    <el-aside>demo</el-aside>
    <el-main>
      <el-card style="margin-top: 5%;margin-right: 15%;">
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
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
import CodeEdit from './components/CodeEdit'
export default {
  name: 'ProblemPage',
  components: {CodeEdit},
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
