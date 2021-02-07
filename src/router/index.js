import Vue from 'vue'
import Router from 'vue-router'
import ProblemListIndex from '../ProblemListIndex'
import ProblemPage from '../ProblemPage'
import CodeEdit from '../components/CodeEdit'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ProblemsIndex',
      component: ProblemListIndex
    },
    {
      path: '/problem/:id',
      name: 'ProblemsPage',
      component: ProblemPage
    },
    {
      path: '/demo',
      name: 'demo',
      component: CodeEdit
    }
  ]
})
