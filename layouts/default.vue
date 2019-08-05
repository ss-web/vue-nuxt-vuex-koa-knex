<template>
  <section>
    <navbar />
    <br>
    <section class="container">
      <nuxt/>
    </section> 
  </section>
</template>

<script>
import NavBar from '~/components/NavBar.vue'

export default {
  components: {
    'navbar': NavBar
  }
}
</script>
