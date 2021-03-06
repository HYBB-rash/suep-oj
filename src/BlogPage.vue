<template>
  <el-card :style="style.card">
    <paper-page></paper-page>
  </el-card>
</template>

<script>
import PaperPage from './components/PaperPage'
export default {
  name: 'BlogPage',
  components: {PaperPage},
  data () {
    return {
      style: {
        card: {
          marginLeft: '5%',
          marginRight: '5%'
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
