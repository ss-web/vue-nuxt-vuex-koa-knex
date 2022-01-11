
export const state = () => ({
  list: [],
  categories: [],
  countPages: 0
})

export const mutations = {
  setPosts(state, list) {
    state.list = list;
  },
  setCategories(state, categories) {
    state.categories = categories;
  },
  setCountPages(state, number) {
    state.countPages = number;
  },
  setActiveCategory(state, category) {
    state.activeCategory = category;
  }
}

export const actions = {
  async fetch({commit}, params) {
    // const page = params?.page || 1;
    // const category = params?.category ? `&category=${params?.category}` : '';
    // const p = await this.$axios.$get(`api/posts`); // ?fields=slug,categories,post_thumbnail,title,date${category}&number=20&page=${page}
		// console.log(p);
    // commit('setCountPages', Math.ceil(p?.found / 20));
    // commit('setPosts', p?.posts);
  },
  async fetchCategories({commit}) {
    const с = await this.$axios.$get('/categories');
    commit('setCategories', с?.categories);
  }
}

export const getters = {
  list: s => s.list,
  categories: s => s.categories,
  countPages: s => s.countPages
}
