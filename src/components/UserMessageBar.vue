<template>
  <el-row :style="style.row">
    <el-col :span="2">
      <el-avatar :src='UserMessage.icon' :size="60"></el-avatar>
    </el-col>
    <el-col :span="22">
      <span :style="style.UsernameBig">{{UserMessage.username}}</span>
      <el-row>
        <el-col :span="4">
          <span :style="style.UsernameSmall">{{UserMessage.username}}</span>
        </el-col>
        <el-col :span="20">
          <span :style="style.instruction">{{UserMessage.instruction}}</span>
        </el-col>
      </el-row>
      <div style="margin-top: 5px">
        <span :style="style.Rank">全站排名：</span>
        <span :style="style.RankNumber">{{UserMessage.rank}}</span>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'UserMessageBar',
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
        instruction: '人生在世不如意，不如自挂东南枝',
        rank: 100
      },
      style: {
        row: {
          marginTop: '20px'
        },
        UsernameBig: {
          fontSize: '20px',
          lineHeight: '28px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          color: 'rgba(0,0,0)'
        },
        UsernameSmall: {
          fontSize: '12px',
          color: 'rgba(191,191,191)',
          lineHeight: '17px',
          display: 'flex',
          webkitBoxAlign: 'center',
          alignItems: 'center',
          cursor: 'pointer'
        },
        instruction: {
          fontSize: '12px',
          color: 'rgba(0, 0, 0, 1)',
          lineHeight: '17px',
          display: 'flex',
          webkitBoxAlign: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          float: 'right',
          fontFamily: 'monospace'
        },
        RankNumber: {
          color: 'rgba(0,0,0, 1)',
          fontSize: '16px',
          height: '20px',
          lineHeight: '22px',
          fontFamily: 'FetteMittelschrift, sans-serif'
        },
        Rank: {
          color: 'rgba(0,0,0, 0.65)',
          fontSize: '16px',
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

</style>
