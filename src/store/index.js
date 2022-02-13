import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: null,
    access_token: localStorage.getItem('access_token') || '',
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
      state.token = payload.access_token
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
            const access_token = resp.data.access_token
            const refresh_token = resp.data.refresh_token
            localStorage.setItem('access_token', access_token)
            localStorage.setItem('refresh_token', refresh_token)

            axios({ url: 'http://localhost:8000/api/v1/user/active', headers: { 'Authorization': 'Bearer ' + access_token }, method: 'GET' })
              .then(res => {
                commit('auth_success', { access_token: access_token, user: res.data, refresh_token: refresh_token })
              })
              .catch(error => {
                reject(error)
              })
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
