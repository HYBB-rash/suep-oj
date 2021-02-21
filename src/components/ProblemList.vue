<template>
  <div>
    <!--      条件搜索输入-->
<!--    标签幸喜-->
    <el-row>
      <el-tag color="#337AB7" effect="dark" size="small">
        <span style="font-weight: bold">已解决</span>
      </el-tag> -
      <el-tag color="#5CB85C" effect="dark" size="small">
        <span style="font-weight: bold">简单</span>
      </el-tag>
      <el-tag color="#F0AD4E" effect="dark" size="small">
        <span style="font-weight: bold">中等</span>
      </el-tag>
      <el-tag color="#D9534F" effect="dark" size="small">
        <span style="font-weight: bold">困难</span>
      </el-tag>
    </el-row>
<!--    功能横栏-->
    <el-row :gutter="20" style="margin-top: 2%; margin-bottom: 5%">
        <el-col :span="8">
          <el-input type="text"
                    v-model="searchName"
                    @change="searchProblems"
                    placeholder="搜索题目"
                    prefix-icon="el-icon-search">
          </el-input>
        </el-col>
        <el-col :offset="2" :span="5">
          <el-select v-model="searchTag"
                     @change="searchProblems"
                     placeholder="题目类型">
            <el-option
              v-for="item in tags"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="4">
          <el-select v-model="searchDifficult"
                     @change="searchProblems"
                     placeholder="难度">
            <el-option
              v-for="item in difficult"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="5">
          <el-select v-model="searchStatus"
                     @change="searchProblems"
                     placeholder="完成情况">
            <el-option
              v-for="item in status"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
    </el-row>
    <!--      展示列表-->
    <el-row>
      <el-card style="" shadow="always">
        <el-table :data="tableData"
                  @row-click="GoToProblem"
                  style="width: 100%;">
          <el-table-column width="40"
                           prop="status">
            <template slot-scope="scope">
              {{statusMapper.get(scope.row.status)}}
            </template>
          </el-table-column>
          <el-table-column prop="name"
                           label="题目名"
                           width="300">
          </el-table-column>
          <el-table-column prop="difficult"
                           label="难度"
                           width="90">
            <template slot-scope="scope">
              {{difficultMapper.get(scope.row.difficult)}}
            </template>
          </el-table-column>
          <el-table-column prop="tag"
                           label="标签">
            <template slot-scope="scope">
              <el-tag>{{tagsMapper.get(scope.row.tag)}}</el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="passRate"
                           label="通过率">
          </el-table-column>
        </el-table>
        <div style="text-align: center">
          <el-pagination background
                         style="margin-top: 100px"
                         layout="prev, pager, next"
                         :current-page.sync="index"
                         @current-change="changePage"
                         :page-size="size"
                         :total="tableData.length">
          </el-pagination>
        </div>
      </el-card>
    </el-row>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/index.css'
import { getAllProblemTags, getAllProblemDifficult, getAllProblemStatusByUserId, searchAllProblemStatus } from '../api/api'

export default {
  name: 'ProblemList',
  data () {
    return {
      tags: [],
      difficult: [],
      status: [],
      searchName: null,
      searchDifficult: null,
      searchTag: null,
      searchStatus: null,
      tableData: [],
      index: 0,
      size: 8,
      statusMapper: this.$store.state.mapper.statusMap,
      tagsMapper: this.$store.state.mapper.tagsMap,
      difficultMapper: this.$store.state.mapper.difficultMap
    }
  },
  methods: {
    changePage () {},
    searchProblems () {
      this.tableData = searchAllProblemStatus(null, this.index, this.size, null,
        this.searchName, this.searchTag, this.searchDifficult, this.searchStatus)
    },
    GoToProblem (row) {
      // 表格事件，点击行后自动跳转到对应的页面
      this.$router.push({path: '/problem/' + row.id + '/detail'})
    }
  },
  created () {
    this.tags = getAllProblemTags(null).tags
    this.difficult = getAllProblemDifficult(null).difficult
    this.status = getAllProblemStatusByUserId(null, null).status
    this.tableData = searchAllProblemStatus(null, this.index, this.size, null,
      this.searchName, this.searchTag, this.searchDifficult, this.searchStatus)
  }
}
</script>

<style>
  .el-input__inner{
    border-radius: 20px;
  }
  .el-card{
    border-radius: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }
  .el-tag{
    border-radius: 16px;
    border-color: #ffffff;
  }
</style>
