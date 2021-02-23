<template>
  <el-menu
    :default-active="'/index'"
    router
    background-color="#FFFFFF"
    text-color="#222"
    style="min-height: 40px;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);">
<!--    <el-menu-item v-for="(item, i) in navList" :key="i" :index="item.name">-->
<!--      {{ item.navItem }}-->
<!--    </el-menu-item>-->
    <el-row :gutter="20">
      <el-col :offset="2" :span="2">
        <i class="el-icon-bank-card" style="font-size: 35px"></i>
        <span class="menu-item" style="font-weight: bold;position: absolute">SUEPOJ</span>
      </el-col>
      <el-col :span="1" class="menu-item">
        <div @click="GoToProblem">题库</div>
      </el-col>
      <el-col :span="1" class="menu-item">
        <div @click="GoToUserPage">主页</div>
      </el-col>
      <el-col :span="1" class="menu-item">讨论</el-col>
      <el-col :span="1" class="menu-item">管理</el-col>
      <el-col :offset="10" :span="2" class="menu-item" style="padding-top: 5px">
        <el-button style="background: #ffffff;"
                   type="success"
                   size="small" plain>大家说</el-button>
      </el-col>
      <el-col  :span="1" class="menu-item">登录</el-col>
      <el-col :span="1" class="menu-item">注册</el-col>
    </el-row>
  </el-menu>
</template>

<script>
export default {
  name: 'NavMenu',
  data () {
    return {
      navList: [
        {name: '/index', navItem: '题库'},
        {name: '/userHome/', navItem: '大家说'},
        {name: '/editPage', navItem: '我的主页'},
        {name: '/userAdminHome/', navItem: '后台管理'}
      ]
    }
  },
  methods: {
    GoToProblem () {
      this.$router.push({path: '/'})
    },
    GoToUserPage () {
      this.$router.push({path: '/user/page/:id'})
    }
  }
}
</script>

<style>
a{
  text-decoration: none;
}
.el-menu--horizontal>.el-menu-item {
  min-height: 30px;
}
span{
  pointer-events: none;
}
.menu-item {
  font-size: 13px;
  position: relative;
  padding-top: 10px;
  padding-left: 10px;
}
</style>
