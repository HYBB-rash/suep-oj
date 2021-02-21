import Vue from 'vue'
import Router from 'vue-router'
import ProblemListIndex from '../ProblemListIndex'
import ProblemPage from '../ProblemPage'
import ProblemDetail from '../components/ProblemDetail'
import AnswerList from '../components/AnswerList'
import ProblemTest from '../components/ProblemTest'
import ProblemComment from '../components/ProblemComment'
// import CommentItem from '../components/CommentItem'
import PaperPage from '../components/PaperPage'
import BlogPage from '../BlogPage'

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
      component: ProblemPage,
      children: [
        {
          path: '/problem/:id/detail',
          name: 'ProblemDetail',
          component: ProblemDetail
        },
        {
          path: '/problem/:id/answer',
          name: 'AnswerList',
          component: AnswerList
        },
        {
          path: '/problem/:id/test',
          name: 'ProblemTest',
          component: ProblemTest
        },
        {
          path: '/problem/:id/comment',
          name: 'ProblemComment',
          component: ProblemComment
        },
        {
          path: '/problem/:id/answer/:aid',
          name: 'AnswerPage',
          component: PaperPage
        }
      ]
    },
    {
      path: '/blog/:id',
      name: 'blog',
      component: BlogPage
    }
  ]
})
