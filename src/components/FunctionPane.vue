<template>
  <div>
    <el-divider></el-divider>
    <el-menu default-active="3"
             mode="vertical">
      <el-menu-item index="3">
        <div class="ColAndRow">
          <div class="el-icon-position iconStyle">题目详情</div>
        </div>
      </el-menu-item>
      <el-menu-item index="1">
        <div class="ColAndRow">
          <div class="el-icon-document iconStyle">题解</div>
        </div>
      </el-menu-item>
      <el-menu-item index="2">
        <div class="ColAndRow cardBackground">
          <div class="el-icon-chat-dot-square iconStyle">讨论</div>
        </div>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'FunctionPane'
}
</script>

<style>
.ColAndRow {
  /*text-align: center;*/
  height: 100%;
  width: 100%;

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
</style>
