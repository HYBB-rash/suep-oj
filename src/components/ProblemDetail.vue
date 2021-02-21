<template>
  <markdown-page :data="value"></markdown-page>
</template>

<script>
import MarkdownPage from './MarkdownPage'
import {getProblemDetail} from '../api/api'

export default {
  name: 'ProblemDetail',
  components: {MarkdownPage},
  data () {
    return {
      value: null
    }
  },
  created () {
    this.value = getProblemDetail({pid: this.$route.params.id}).value
    // console.log(this.value)
  }
}
</script>

<style scoped>

</style>
