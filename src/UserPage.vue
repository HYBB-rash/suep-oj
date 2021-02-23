<template>
  <el-container>
    <el-aside>
      <user-message></user-message>
    </el-aside>
    <el-main>
      <el-divider></el-divider>
      <el-row>
        <el-col :span='12'>
          <el-button @click="GoToProblemList">题目</el-button>
        </el-col>
        <el-col :span="12">
          <el-button @click="GoToSentList">文章</el-button>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import UserMessage from './components/UserMessage.vue'
export default {
  components: { UserMessage },
  name: 'UserPage',
  methods: {
    GoToProblemList () {
      this.$router.push({path: '/user/page/1/problem'})
    },
    GoToSentList () {
      this.$router.push({path: '/user/page/1/sent'})
    }
  }
}
</script>

<style>

</style>
