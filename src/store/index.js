import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: null,
    token: localStorage.getItem('token') || '',
    user: {}
  },
  getters: {
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, payload) {
      state.status = 'success'
      state.token = payload.token
      state.user = payload.user
    },
    auth_error(state) {
      state.status = 'error'
    },
  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({ url: 'http://localhost:8000/oauth/token', data: user, method: 'POST' })
          .then(resp => {
            console.log(resp)
            const token = resp.data.access_token

            localStorage.setItem('token', token)
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', { token: token, user: user })
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },
  },
  modules: {
  }
})
