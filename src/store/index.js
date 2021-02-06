import Vue from 'vue'
import Vuex from 'vuex'
import mapper from './mapper'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    mapper: mapper
  }
})
