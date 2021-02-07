<template>
  <div ref="monacoEditor" class="monaco-editor"></div>
</template>

<script>
// 高亮编辑器
import * as monaco from 'monaco-editor'
// 监控组件尺寸变化
// 安装: npm install element-resize-detector --save
// import elementResizeDetectorMaker from 'element-resize-detector'
export default {
  name: 'CodeEdit',
  props: {
    value: String, // 需要高亮的代码
    language: String, // 语言类型
    readOnly: Boolean // 是否自读，true：自读，不可修改；false：可以修改
  },
  data () {
    return {
      languages: ['apex', 'azcli', 'bat', 'clojure', 'coffee', 'cpp', 'csharp', 'csp', 'css', 'dockerfile', 'fsharp', 'go', 'handlebars', 'html', 'ini', 'java', 'javascript', 'json', 'less', 'lua', 'markdown', 'msdax', 'mysql', 'objective', 'perl', 'pgsql', 'php', 'postiats', 'powerquery', 'powershell', 'pug', 'python', 'r', 'razor', 'redis', 'redshift', 'ruby', 'rust', 'sb', 'scheme', 'scss', 'shell', 'solidity', 'sql', 'st', 'swift', 'typescript', 'vb', 'xml', 'yaml'],
      themes: ['vs', 'hc-black', 'vs-dark'],
      theme: 'vs', // 编辑器风格
      editorOptions: {
        selectOnLineNumbers: true,
        roundedSelection: false,
        readOnly: this.readOnly, // 只读
        cursorStyle: 'line', // 光标样式
        automaticLayout: false, // 自动布局
        glyphMargin: true, // 字形边缘
        useTabStops: false,
        fontSize: 28, // 字体大小
        autoIndent: false // 自动布局
      }
    }
  },
  methods: {
    initEditor () {
      let self = this
      self.$refs.monacoEditor.innerHTML = ''
      self.monacoEditor = monaco.editor.create(self.$refs.monacoEditor, {
        value: self.currentValue,
        language: self.language,
        theme: self.theme, // vs, hc-black, or vs-dark
        readOnly: self.readOnly,
        editorOptions: self.editorOptions
      })
      self.$emit('onMounted', self.monacoEditor)// 编辑器创建完成回调
      self.monacoEditor.onDidChangeModelContent(function (event) { // 编辑器内容changge事件
        self.currentValue = self.monacoEditor.getValue()
        self.$emit('onCodeChange', self.monacoEditor.getValue(), event)
      })
      // 自定义键盘事件
      self.monacoEditor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S, function () {
        self.$emit('onCommit', self.monacoEditor.getValue(), self.monacoEditor)
      })
      self.monacoEditor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Alt | monaco.KeyCode.KEY_S, function () {
        // 自定义快捷操作
      })
    },
    changeLanguage (val) {
      monaco.editor.setModelLanguage(this.monacoEditor.getModel(), val)
    },
    changeTheme (val) {
      monaco.editor.setTheme(val)
    },
    changeOptions () {
      // 修改配置
      this.monacoEditor.updateOptions(this.editorOptions)
    }
  },
  computed: {
    // v-model 实现数据双向绑定
    currentValue: {
      get: function () {
        return this.value
      },
      set: function (value) {
        // console.log(this.language)
        this.$emit('input', value)
      }
    }
  },
  watch: {
    language: function (a, b) {
      console.log(a)
      this.changeLanguage(a)
    }
  },
  mounted () {
    this.initEditor()
    // console.log(this.$props.language)
    // let erd = elementResizeDetectorMaker()
    // let that = this
    // erd.listenTo(that.$refs.editorContainer, function (el) {
    //   that.$nextTick(function () {
    //     // 使echarts尺寸重置
    //     console.log(el.offsetWidth)
    //     console.log(el.offsetHeight)
    //     // that.initEditor()
    //     that.myEcharts.resize()
    //   })
    // })
  }
}
</script>

<style scoped>
.monaco-editor{
  height: 600px;
  width: 800px;
  position: relative;
  /*text-align: center;*/
}
</style>
