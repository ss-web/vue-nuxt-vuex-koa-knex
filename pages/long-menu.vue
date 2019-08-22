<template>
  <div>
    <list-tree :menu="menu" />  
  </div>
</template>

<script>
import ListTree from '~/components/common/ListTree.vue';
import * as menu from '~/data/menu'

export default {
  name: 'long-menu',
  components: {
    ListTree
  },
  data: () => ({
    menu
  }),
  methods: {
    logout(){
      this.$store.dispatch('auth/logout')
      this.$router.push('/')
    }
  }
}
</script>