<template>
  <el-container>
    <el-aside>
      <el-menu default-active="2" class="el-menu-vertical-demo">
        <el-menu-item index="1">
          <template slot-scope="scope">
            <i class="el-icon-location"></i>
            <span>博客</span>
          </template>
        </el-menu-item>
        <el-menu-item index="2">
          <template slot-scope="scope">
            <i class="el-icon-location"></i>
            <span>题解</span>
          </template>
        </el-menu-item>
        <el-menu-item index="3">
          <template slot-scope="scope">
            <i class="el-icon-location"></i>
            <span>demo1</span>
          </template>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <el-row>
        <el-carousel height="250px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </el-row>
      <el-row>
        <el-card>
          <blog-list></blog-list>
        </el-card>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import BlogList from './components/BlogList.vue'
export default {
  components: { BlogList },
  name: 'PaperIndex'
}
</script>

<style>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
