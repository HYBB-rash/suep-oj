<template>
  <el-card>
    <el-row>
      <span slot="header" style="font-size: 14px">Username</span>
    </el-row>
    <el-row>
      <div style="text-align: center">
        <el-avatar :src='url'></el-avatar>
      </div>
    </el-row>
    <el-row>
      <span>性别：{{UserMessage.sex === 1 ? '男' : '女'}}</span>
    </el-row>
    <el-row>
      <span>邮箱：{{UserMessage.mail}}</span>
    </el-row>
    <el-row>
      <span>电话：{{UserMessage.phone}}</span>
    </el-row>
    <el-row>
      <span>单位：{{UserMessage.school}}</span>
    </el-row>
  </el-card>
</template>

<script>
export default {
  name: 'UserMessage',
  data () {
    return {
      UserMessage: {
        uid: 1,
        sex: 1,
        mail: 'hyong_cs@outlook.com',
        phone: '13413675421',
        school: '哈佛大学'
      }
    }
  }
}
</script>

<style>

</style>
