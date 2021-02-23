<template>
  <el-container>
    <el-aside>
      <el-menu>
        <el-menu-item>
          <template slot-scope="scope">
            <i class="el-icon-location"></i>
            <span>用户管理</span>
          </template>
        </el-menu-item>
        <el-menu-item>
          <template slot-scope="scope">
            <i class="el-icon-location"></i>
            <span>评论管理</span>
          </template>
        </el-menu-item>
        <el-menu-item>
          <template slot-scope="scope">
            <i class="el-icon-location"></i>
            <span>题目管理</span>
          </template>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <el-divider>👈欢迎来到管理页面！点击左边的功能开始👈</el-divider>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'ManagePage'
}
</script>

<style>

</style>
