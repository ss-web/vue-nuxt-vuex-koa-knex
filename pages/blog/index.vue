<template>
  <section>
    <h1>{{pageTitle}}</h1>
    <pre>
      {{posts}}
    </pre>
    <!-- <ul>
      <li v-for="post of posts" :key="post.id">
        <a href="#" @click.prevent="openPage(post)">{{post.title}}</a>
      </li>
    </ul> -->
  </section>
</template>

<script>
  export default {
    async fetch({store}){
      if (store.getters['posts/posts'].length === 0) {
        await store.dispatch('posts/fetch')
      }
    },
    data: () => ({
      pageTitle: 'All posts'
    }),
    computed: {
      posts() {
        return this.$store.getters['posts/posts']
      }
    },
    methods: {
      openPage(path) {
        this.$router.push('/blog/' + path.url)
      },
      loadposts(){

      }
    }
  }
</script>
