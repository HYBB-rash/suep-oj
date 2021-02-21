<template>
  <div class="markdown-body">
    <vue-markdown :source="value" v-highlight></vue-markdown>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
export default {
  name: 'MarkdownPage',
  components: {VueMarkdown},
  props: ['data'],
  data () {
    return {
      value: 'null'
    }
  },
  created () {
    this.value = this.$props.data
  }
}
</script>

<style scoped>

</style>
