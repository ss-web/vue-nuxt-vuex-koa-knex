<template>
  <div class="container">
    <h1 class="chapter-title">Blog</h1>
    <Navigation :categories="categories" />
    <Posts :posts="posts" :countPages="countPages" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  async fetch({store, query}){
    await store.dispatch('posts/fetch', { page: query.page });
    await store.dispatch('posts/fetchCategories');
  },

  head () {
    return {
      title: `SS-web - Blog`,
      meta: [
        { hid: 'description', name: 'description', content: '' }
      ]
    };
  },

  computed: {
    ...mapGetters({
      posts: 'posts/list',
      categories: 'posts/categories',
		  countPages: 'posts/countPages'
    })
  }
}
</script>
