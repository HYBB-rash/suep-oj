<template>
  <el-card :style="style.card">
    <el-divider></el-divider>
    <el-row>
      <el-button type="info"
                 class="buttonInfo"
                 :style="style.editButton"
                 size="medium">编辑个人资料</el-button>
    </el-row>
    <el-divider></el-divider>
    <h3>成就贡献</h3>
    <el-row :style="style.row">
      <el-col :span="4">👀</el-col>
      <el-col :span="20">
        <span :style="style.ElementName">阅读总数</span>
        <span :style="style.ElementNumber">{{UserMessage.watch}}</span>
      </el-col>
    </el-row>
    <el-row :style="style.row">
      <el-col :span="4">👍</el-col>
      <el-col :span="20">
        <span :style="style.ElementName">获得点赞</span>
        <span :style="style.ElementNumber">{{UserMessage.love}}</span>
      </el-col>
    </el-row>
    <el-row :style="style.row">
      <el-col :span="4">👎</el-col>
      <el-col :span="20">
        <span :style="style.ElementName">遭人唾弃</span>
        <span :style="style.ElementNumber">{{UserMessage.hate}}</span>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <h3>个人简介</h3>
    <el-row :style="style.row">
      <el-col :span="4">👬</el-col>
      <el-col :span="20">{{UserMessage.sex === 1 ? '男' : '女'}}</el-col>
    </el-row>
    <el-row :style="style.row">
      <el-col :span="4">📧</el-col>
      <el-col :span="20">{{UserMessage.mail}}</el-col>
    </el-row>
    <el-row :style="style.row">
      <el-col :span="4">📱</el-col>
      <el-col :span="20">{{UserMessage.phone}}</el-col>
    </el-row>
    <el-row :style="style.row">
      <el-col :span="4">🏫</el-col>
      <el-col :span="20">{{UserMessage.school}}</el-col>
    </el-row>
    <el-divider></el-divider>
    <h3>擅长技能</h3>
  </el-card>
</template>

<script>
export default {
  name: 'UserMessage',
  data () {
    return {
      UserMessage: {
        uid: 1,
        username: 'hyong',
        icon: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        sex: 1,
        mail: 'hyong_cs@outlook.com',
        phone: '13413675421',
        school: '哈佛大学',
        watch: 100,
        love: 100,
        hate: 100
      },
      style: {
        card: {
          width: '80%',
          marginTop: '10px'
        },
        row: {
          marginTop: '10px'
        },
        UsernameBig: {
          fontSize: '20px',
          lineHeight: '28px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          color: 'rgba(var(--grey-9-rgb), 1)'
        },
        UsernameSmall: {
          fontSize: '12px',
          color: 'rgba(var(--grey-5-rgb), 1)',
          lineHeight: '17px',
          display: 'flex',
          webkitBoxAlign: 'center',
          alignItems: 'center',
          cursor: 'pointer'
        },
        editButton: {
          width: '90%',
          marginLeft: '5%',
          marginRight: '5%',
          color: '#595959',
          borderColor: '#FFFFFF'
        },
        ElementName: {
          color: 'rgba(0,0,0, 0.65)',
          fontSize: '14px',
          height: '20px',
          lineHeight: '22px',
          fontFamily: 'FetteMittelschrift, sans-serif',
          marginRight: '10px'
        },
        ElementNumber: {
          color: 'rgba(0,0,0, 1)',
          fontSize: '14px',
          height: '20px',
          lineHeight: '22px',
          fontFamily: 'FetteMittelschrift, sans-serif'
        }
      }
    }
  }
}
</script>

<style scoped>
  .buttonInfo {
    background-color: #F2F2F2;
  }
  .buttonInfo:hover {
    background-color: #E5E5E5;
    /*border-color: #FFFFFF;*/
    /*background-color: #292929;*/
  }
</style>
