export default {
  state: {
    id: window.localStorage.getItem('login' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('login' || '[]')).id,
    username: window.localStorage.getItem('login' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('login' || '[]')).username
  },
  mutations: {
    storeLoginMessage (state, playLoad) {
      state.id = playLoad.userId
      state.username = playLoad.username
      window.localStorage.setItem('login', JSON.stringify(state))
    },
    logout (state) {
      state.id = null
      state.username = null
      window.localStorage.removeItem('login')
    }
  }
}
