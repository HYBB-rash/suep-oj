<template>
  <el-card>
    <div>
      标题：<el-input></el-input>
    </div>
    <editor :value='value'></editor>
  </el-card>
</template>

<script>
import Editor from './components/Editor.vue'
export default {
  components: { Editor },
  data () {
    return {
      value: ''
    }
  }
}
</script>

<style>

</style>
