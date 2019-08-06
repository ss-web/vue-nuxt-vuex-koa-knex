<template>
    <section v-if="data">
        <h1>Post {{data.pagetitle}}</h1>
        {{data.content}}
    </section>
</template>

<script>
export default {
  // validate({params}) {
  //   console.log(data)
  //   return false
  // },
  async asyncData({$axios, params}) {
    const page = await $axios.$get('/api/posts/'+params.url)
    const data = page[0]
    return {data};
  }
}
</script>
