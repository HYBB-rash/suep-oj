<template>
  <div>
    <example :custom="false"
             class="example"></example>
    <example v-for="(item) in examples"
             :key="item.id"
             :id="item.id"
             :custom="true"
             class="example"
             :input="item.input"
             :output="item.output"></example>
  </div>
</template>

<script>
import {getTestExample} from '../api/api'
import Example from './Example'

export default {
  name: 'ProblemTest',
  components: {Example},
  data () {
    return {
      examples: []
    }
  },
  created () {
    console.log(this.$route.params.id)
    console.log('标记')
    this.examples = getTestExample({pid: this.$route.params.id}).ex
  }
}
</script>

<style scoped>
.example {
  margin: 3%;
}
</style>
