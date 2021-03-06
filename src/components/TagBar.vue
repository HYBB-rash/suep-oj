<template>
  <!--    标签幸喜-->
    <el-row>
      <el-tag :style="style.elTag" color="#337AB7" effect="dark" size="small">
        <span style="font-weight: bold">已解决</span>
      </el-tag> -
      <el-tag :style="style.elTag" color="#5CB85C" effect="dark" size="small">
        <span style="font-weight: bold">简单</span>
      </el-tag>
      <el-tag :style="style.elTag" color="#F0AD4E" effect="dark" size="small">
        <span style="font-weight: bold">中等</span>
      </el-tag>
      <el-tag :style="style.elTag" color="#D9534F" effect="dark" size="small">
        <span style="font-weight: bold">困难</span>
      </el-tag>
    </el-row>
</template>

<script>
export default {
  name: 'TagBar',
  data () {
    return {
      style: {
        elTag: {
          borderRadius: '16px',
          borderColor: '#ffffff'
        }
      }
    }
  }
}
</script>

<style>

</style>
