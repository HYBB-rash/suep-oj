<template>
  <el-card>
<!--    <span slot="header">测试用例{{id}}</span>-->
    <h3 v-if="custom">Sample Input {{id}}:</h3>
    <h3 v-else>测试用例</h3>
    <el-input type="textarea"
              :rows="3"
              :disabled="custom"
              v-model="input"></el-input>
    <h3 v-if="custom">Sample Output {{id}}:</h3>
    <el-input type="textarea"
              v-if="custom"
              :rows="3"
              disabled
              v-model="output"></el-input>
    <el-button style="margin-top: 10px;margin-bottom: 10px;float: right;">运行测试</el-button>
  </el-card>
</template>

<script>
export default {
  name: 'Example',
  props: {
    id: Number,
    input: String,
    output: String,
    custom: Boolean
  }
}
</script>

<style scoped>

</style>
