<template>
  <section>
    <h1>{{pageTitle}}</h1>
    <ul>
      <li v-for="page of pages" :key="page.id">
        <a href="#" @click.prevent="openPage(page)">{{page.title}}</a>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    data: () => ({
      pageTitle: 'All posts'
    }),
    async asyncData({$axios}) {
      const pages = await $axios.$get('/api/posts')
      return {pages}
    },
    methods: {
      openPage(path) {
        this.$router.push('/blog/' + path.url)
      },
      loadPages(){

      }
    }
  }
</script>
