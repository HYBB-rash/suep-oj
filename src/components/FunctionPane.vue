<template>
  <div>
    <el-divider></el-divider>
    <el-row>
      <el-col :span="6">
        <el-button class="ColAndRow NavmenuButton" @click="goDetail">
          <div class="iconStyle">🚀题目详情</div>
        </el-button>
      </el-col>
      <el-col :span="6">
        <el-button class="ColAndRow NavmenuButton" @click="goAnswer">
          <div class="iconStyle">📒题解</div>
        </el-button>
      </el-col>
      <el-col :span="6">
        <el-button class="ColAndRow NavmenuButton" @click="goComment">
          <div class="iconStyle">🤼‍♂️讨论</div>
        </el-button>
      </el-col>
      <el-col :span="6">
        <el-button class="ColAndRow NavmenuButton" @click="goTest">
          <div class="iconStyle">🕵️‍♀️测试</div>
        </el-button>
      </el-col>
    </el-row>
    <el-divider></el-divider>
  </div>
</template>

<script>
export default {
  name: 'FunctionPane',
  data () {
    return {
      rootUrl: '/problem/1'
    }
  },
  methods: {
    goDetail () {
      const url = this.rootUrl + '/detail'
      this.$router.push({path: url})
    },
    goTest () {
      const url = this.rootUrl + '/test'
      this.$router.push({path: url})
    },
    goComment () {
      const url = this.rootUrl + '/comment'
      this.$router.push({path: url})
    },
    goAnswer () {
      const url = this.rootUrl + '/answer'
      this.$router.push({path: url})
    }
  }
}
</script>

<style>
.ColAndRow {
  text-align: center;
  height: 100%;
  width: 100%;
  /*margin: auto;*/
}
.iconStyle {
  font-size: 14px;
  /*color: white;*/
  color: inherit;
  /*text-align: center;*/
}
.iconStyle:hover {
  color: inherit;
}
.el-menu{
  /*border-left: 1px solid;*/
  border-right: 0;
  border-bottom: 0;
  background-color: #F7F7F7;
  border-radius: 16px;
}
.el-menu-item:hover{
  background-color: #1C80F2;
  color: white;
}
.el-menu-item {
  color: black;
  border-top-right-radius: 32px;
  border-bottom-right-radius: 32px;
  /*margin-top: 3px;*/
  /*margin-bottom: 3px;*/
}
.el-divider--horizontal {
  width: 90%;
  text-align: center;
  margin: 10px auto;
}
.NavmenuButton {
  background-color: #F7F7F7;
  border: 0;
  border-radius: 32px;
}
</style>
