<template>
  <el-card :style="style.card">
    <div>
      <el-row>
        <el-col :span="1">标题：</el-col>
        <el-col :span="20"><el-input></el-input></el-col>
      </el-row>
    </div>
    <editor :style="style.editor" :value='value'></editor>
    <el-row>
      <el-col :offset="20" :span="2">
        <el-button>保存</el-button>
      </el-col>
      <el-col :span="2">
        <el-button>发布</el-button>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import Editor from './components/Editor.vue'
export default {
  components: { Editor },
  data () {
    return {
      value: '',
      style: {
        card: {
          marginLeft: '5%',
          marginRight: '5%',
          marginTop: '10%'
        },
        editor: {
          marginTop: '10px'
        }
      }
    }
  }
}
</script>

<style>

</style>
