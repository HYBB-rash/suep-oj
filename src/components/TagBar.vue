<template>
  <!--    标签幸喜-->
    <el-row>
      <el-tag color="#337AB7" effect="dark" size="small">
        <span style="font-weight: bold">已解决</span>
      </el-tag> -
      <el-tag color="#5CB85C" effect="dark" size="small">
        <span style="font-weight: bold">简单</span>
      </el-tag>
      <el-tag color="#F0AD4E" effect="dark" size="small">
        <span style="font-weight: bold">中等</span>
      </el-tag>
      <el-tag color="#D9534F" effect="dark" size="small">
        <span style="font-weight: bold">困难</span>
      </el-tag>
    </el-row>
</template>

<script>
export default {
  name: 'TagBar'
}
</script>

<style>

</style>
