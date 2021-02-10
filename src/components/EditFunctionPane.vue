<template>
  <div>
    <el-select v-model="language"
               default-first-option
               style="margin-bottom: 1%;">
      <el-option v-for="item in languages"
                 :key="item.value"
                 :label="item.label"
                 :value="item.value">
      </el-option>
    </el-select>
    <el-tooltip class="item" effect="dark" content="显示编译器信息" placement="bottom">
      <i class="el-icon-warning-outline iconMargin"></i>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="上次提交的代码" placement="bottom">
      <i class="el-icon-time iconMargin"></i>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="设置" placement="bottom">
      <i class="el-icon-setting iconMargin"></i>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="帮助" placement="bottom">
      <i class="el-icon-question iconMargin"></i>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  name: 'EditFunctionPane',
  data () {
    return {
      language: 'cpp',
      languages: [
        {value: 'python', label: 'Python 3'},
        {value: 'c', label: 'C (gcc)'},
        {value: 'cpp', label: 'C++ (g++)'},
        {value: 'java', label: 'Java'}]
    }
  }
}
</script>

<style scoped>
  .iconMargin {
    margin: 1%;
    font-weight: bold;
  }
  .iconMargin:hover {
    color: #007bff;
  }
</style>
