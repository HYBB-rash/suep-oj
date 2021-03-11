<template>
  <div :style="style.main">
    <div>
      <user-message-bar></user-message-bar>
    </div>
    <el-container>
      <el-aside>
        <user-message></user-message>
      </el-aside>
      <el-main>
        <el-row>
          <el-col :span='6'>
            <el-button @click="GoToProblemList">我的题目</el-button>
          </el-col>
          <el-col :span="6">
            <el-button @click="GoToSentList">提交发布</el-button>
          </el-col>
          <el-col :span="6">
            <el-button>我的文章</el-button>
          </el-col>
          <el-col :span="6">
            <el-button>我的评论</el-button>
          </el-col>
        </el-row>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import UserMessage from './components/UserMessage.vue'
import UserMessageBar from './components/UserMessageBar'
export default {
  components: { UserMessageBar, UserMessage },
  name: 'UserPage',
  data () {
    return {
      style: {
        main: {
          marginLeft: '13%',
          marginRight: '13%'
        }
      }
    }
  },
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
