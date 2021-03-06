<template>
  <div id="app">
    <el-container style="width: 100%">
      <el-header height="40px" style="padding: 0;">
        <nav-menu></nav-menu>
      </el-header>
      <el-main :style="style.elMain">
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import NavMenu from './NavMenu'
export default {
  name: 'App',
  components: {NavMenu},
  data () {
    return {
      style: {
        elMain: {padding: '0', marginTop: '10px'}
      }
    }
  },
  methods: {
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
    /*margin-top: 60px;*/
    position: absolute;
    overflow-x: hidden;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .el-scrollbar__wrap {
    overflow-y: scroll;
    overflow-x: hidden;
  }
</style>
