import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  hello: 'world',
  flag: true
}

const mutations = {
  TOGGLE (state) {
    state.flag = !state.flag
  }
}

export default new Vuex.Store({
  state,
  mutations
})
