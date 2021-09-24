<template>
  <div>
    <div class="row">
      <Post v-for="c in posts" :key="c.ID" :post="c" />
    </div>
    <div v-if="countPages > 1" class="pagination">
      <div v-for="n in countPages" :key="n" class="number" :class="{'active': n == activePage}"  @click="openPage(n)" v-html="n" />
    </div>
  </div>
</template>


<script>
export default {
	props: ['countPages','posts'],

  computed: {
    activePage() {
      return this.$nuxt.$route.query?.page || 1;
    }
	},

  methods: {
    openPage(n) {
      const category = this.$nuxt.$route.params.category;
      const params = category ? { page: n, category } : { page: n };
      this.$store.dispatch('posts/fetch', params);
      this.$router.push(`${category||''}?page=${n}`);
    }
  }
}
</script>

<style scoped lang="scss">
  .pagination{
    display: flex;
    flex-wrap: wrap;
    margin: 0 4px;
  }
  .number{
    align-items: center;
    background: $blue;
    border-radius: 8px;
    color: $white;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    padding: 5px;
    margin: 4px;
    min-width: 20px;
    &.active{
      background-color: $blue-hover;
      pointer-events: none;
    }
    &:hover{
      box-shadow: $hover-gradient;
    }
  }
</style>
