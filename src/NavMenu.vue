<template>
  <el-menu
    :default-active="'/index'"
    router
    background-color="#FFFFFF"
    text-color="#222"
    style="min-height: 40px;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);">
    <el-row :gutter="20">
      <el-col :offset="2" :span="2">
        <i class="el-icon-bank-card" style="font-size: 35px"></i>
        <span :style="style.logo">SUEPOJ</span>
      </el-col>
      <el-col :span="1" :style="style.menuItem">
        <div @click="GoToProblem">题库</div>
      </el-col>
      <el-col :span="1" :style="style.menuItem">
        <div @click="GoToUserPage">主页</div>
      </el-col>
      <el-col :span="1" :style="style.menuItem">
        <div @click="GoToPaperEdit">博客</div>
      </el-col>
      <el-col :span="1" :style="style.menuItem">
        <div @click="GoToManage">管理</div>
      </el-col>
      <el-col :offset="10" :span="2">
        <el-button style="background: #ffffff;"
                   :style="style.button"
                   type="success"
                   @click="GoToPaperIndex"
                   size="small" plain>大家说</el-button>
      </el-col>
      <el-col  :span="1" :style="style.menuItem">登录</el-col>
      <el-col :span="1" :style="style.menuItem">注册</el-col>
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
      ],
      style: {
        menuItem: {
          fontSize: '13px',
          position: 'relative',
          paddingTop: '10px',
          paddingLeft: '10px'
        },
        logo: {
          fontSize: '13px',
          paddingTop: '10px',
          paddingLeft: '10px',
          fontWeight: 'bold',
          position: 'absolute'
        },
        button: {
          fontSize: '14px',
          background: '#ffffff',
          position: 'relative',
          marginTop: '2px'
        }
      }
    }
  },
  methods: {
    GoToProblem () {
      this.$router.push({path: '/'})
    },
    GoToUserPage () {
      this.$router.push({path: '/user/page/:id'})
    },
    GoToPaperIndex () {
      this.$router.push({path: '/blog'})
    },
    GoToPaperEdit () {
      this.$router.push({path: '/edit'})
    },
    GoToManage () {
      this.$router.push({path: '/manager'})
    }
  }
}
</script>

<style scoped>
  a{
    text-decoration: none;
  }
</style>
