export const state = () => ({
    posts: []
})

export const mutations = {
    setPosts(state, posts) {
        state.posts = posts
    }
}

export const actions = {
    async fetch({commit}) {
        const posts = await this.$axios.$get('/api/posts')
        commit('setPosts', posts)
    }
}

export const getters = {
    posts: s => s.posts
}