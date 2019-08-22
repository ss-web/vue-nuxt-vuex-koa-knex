export const state = () => ({
    posts: []
})

export const mutations = {
    SET_POSTS(state, posts) {
        state.posts = posts
    },    
    CHANGE_STATUS(state, payload) {
        state.posts.data.find(x => x.id === payload.id).status = payload.status;
    }
}

export const actions = {
    async fetch({commit}) {
        const posts = await this.$axios.$get('/api/posts')
        commit('SET_POSTS', posts)
    },
    changeStatus(context, status) {
      context.commit("CHANGE_STATUS", status);
    }
}

export const getters = {
    posts: s => s.posts
}