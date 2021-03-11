<template>
  <div>
    <el-card>
      <el-row :span='12'>总点赞数{{love}}</el-row>
      <el-row :span='12'>总浏览量{{watch}}</el-row>
    </el-card>
    <el-card>
      <paper-list></paper-list>
    </el-card>
  </div>
</template>

<script>
import PaperList from './PaperList.vue'
export default {
  components: { PaperList },
  name: 'MySentList',
  data () {
    return {
      love: 100,
      watch: 200
    }
  }
}
</script>

<style>

</style>
