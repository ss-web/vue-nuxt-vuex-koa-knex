export const state = () => ({
  token: null,
  role: null
})

export const mutations = {
  setAuth(state, params) {
    state.token = params.data.token
    state.role = params.data.role
  },
  clearAuth() {
    state.token = null
    state.role = null
  }
}

export const actions = {
  async login({commit}, user) {
    const params = await this.$axios.$post('/api/auth', user).then(
      data => {
        console.log(user)
          return {
              valid : true,
              data  : data
          }
        }
      );
    console.log(params)
    commit('setAuth', params)
  },
  logout({commit}) {
    commit('clearToken')
  }
}

export const getters = {
  hasToken: s => !!s.token,
  getRole: s => s.role
}