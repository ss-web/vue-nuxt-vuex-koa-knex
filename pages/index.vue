<template>
  <div>
    <chat />
  </div>
</template>

<script>
import Chat from '~/components/Chat.vue'

export default {
  components: {
    Chat
  },
  mounted(){
    this.test()
  },
  methods: {
    test(){
      console.log('start app')
    }
  }
}
</script>