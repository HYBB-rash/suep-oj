import Vue from 'vue'
import Vuex from 'vuex'
import mapper from './mapper'
import login from './login'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    mapper: mapper,
    login: login
  }
})
