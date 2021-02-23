<template>
  <div>
    <el-card>
      <el-row :span='12'>通过率:{{pass}}</el-row>
      <el-row :span='12'>排名:{{rank}}</el-row>
    </el-card>
    <el-card>
      <problem-list></problem-list>
    </el-card>
  </div>
</template>

<script>
import ProblemList from './ProblemList.vue'
export default {
  components: { ProblemList },
  name: 'MyProblemList',
  data () {
    return {
      pass: 100,
      rank: 1
    }
  }
}
</script>

<style>

</style>
