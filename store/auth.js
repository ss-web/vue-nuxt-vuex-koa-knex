export const state = () => ({
  token: null,
  role: null
})

export const mutations = {
  SET_AUTH(state, params) {
    state.token = params.data.token
    state.role = params.data.role
  },
  CLEAR_AUTH(state) {
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
    commit('SET_AUTH', params)
  },
  logout({commit}) {
    commit('CLEAR_AUTH')
  }
}

export const getters = {
  hasToken: s => !!s.token,
  getRole: s => s.role
}