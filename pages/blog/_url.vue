<template>
    <section>
        <h1>Post {{$route.params.url}}</h1>
        <pre>
            {{$route.params}}
        </pre>
    </section>
</template>

<script>
export default {
  // async asyncData({$axios, params}) {
  //   const page = await $axios.$get('/api/posts/'+params.id)
  //   // return {page}
  //   console.log(page)
  // }
}
</script>
