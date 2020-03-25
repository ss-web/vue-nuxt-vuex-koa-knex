<template>
  <div class="temptale">
    <section>
      <navbar />
      <br>
      <section class="container">
        <nuxt/>
      </section>
    </section>
    <footer class="bg-dark text-light">
      <section class="container">
        <div class="navbar navbar-expand-lg navbar-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus odit fugiat aut placeat modi aperiam consequuntur doloribus dolores quas non, ipsa officiis corporis,
          quisquam saepe, blanditiis voluptatibus quod. Aperiam, officiis.
        </div>
      </section>
    </footer>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'

export default {
  components: {
    'navbar': NavBar
  }
}
</script>

<style lang="sass" scoped>

  .temptale
    display: flex
    justify-content: space-between
    flex-direction: column
    min-height: 100vh

</style>
