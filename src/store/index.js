import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
        axios({ url: 'http://localhost:8000/oauth/token', data: user, method: 'POST' })
          .then(resp => {
            const access_token = resp.data.access_token
            const refresh_token = resp.data.refresh_token
            localStorage.setItem('access_token', access_token)
            localStorage.setItem('refresh_token', refresh_token)
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error')
            reject(err)
          })
      })
    },
    signup({ commit }, user) {
      return new Promise((resolve, reject) => {
        axios({ url: `${process.env.VUE_APP_ROOT_API}/register`, data: user, method: 'POST' })
          .then((res) => {
            if (res.data.email == 'The email has already been taken.') {
              reject("The email has already been taken.");
            } else {
              let obj = {
                grant_type: user.grant_type,
                client_id: user.client_id,
                client_secret: user.client_secret,
                username: user.email,
                password: user.password,
              }
              // Request access_token
              axios({ url: 'http://localhost:8000/oauth/token', data: obj, method: 'POST' })
                .then(resp => {
                  const access_token = resp.data.access_token
                  const refresh_token = resp.data.refresh_token
                  localStorage.setItem('access_token', access_token)
                  localStorage.setItem('refresh_token', refresh_token)
                  resolve(resp)
                })
                .catch(err => {
                  reject(err)
                })
              // End Request access_token
            }
          })
          .catch(err => {
            commit('auth_error')
            reject(err)
          })
      })
    },
  },
  modules: {
  }
})
