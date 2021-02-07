// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex'
import store from './store'
import 'github-markdown-css/github-markdown.css'
import hljs from 'highlight.js'
// import { codemirror } from 'vue-codemirror'
// // import base style
// import 'codemirror/lib/codemirror.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Vuex)
// Vue.use(codemirror)
Vue.directive('highlight', function (el) {
  const blocks = el.querySelectorAll('pre code')
  blocks.forEach(block => {
    hljs.highlightBlock(block)
  })
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
