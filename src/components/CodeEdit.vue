<template>
  <monaco-editor height="600"
                 language="java"
                 :code="code"
                 :editorOptions="options"
                 theme="vs"
                 @mounted="onMounted"
                 @codeChange="onCodeChange"></monaco-editor>
</template>

<script>
import MonacoEditor from 'vue-monaco-editor'

export default {
  name: 'CodeEdit',
  components: {MonacoEditor},
  data () {
    return {
      code: '// Type away! \n',
      options: {
        selectOnLineNumbers: false
      }
    }
  },
  methods: {
    onMounted (editor) {
      this.editor = editor
    },
    onCodeChange (editor) {
      console.log(editor.getValue())
    }
  }
}
</script>

<style scoped>

</style>
