<template>
<div class="row">
  <div class="col-xs-12 col-sm-4">
    <form>
      <div class="form-group">
        <textarea class="form-control" v-model="message" rows="3" placeholder="Write your message"></textarea>
      </div>
      <div class="form-group">
        <div class="btn btn-primary mb-2" @click="sendMessage">Send</div>
      </div>
    </form>
  </div>
  <div class="col-xs-12 col-sm-8">
    <ul class="list-group">
      <li class="list-group-item" v-for="message of messages" :key="message.id">
        {{message.message}}
      </li>
    </ul>
  </div>
</div>
</template>

<script>
  // import io from 'socket.io-client'
  
  export default {
    data: () => ({
      // socket: '',
      messages: [],
      message: ''
    }),
    sockets: {
      connect() {
        console.log('Success IO')
      },
      message(message) {
        console.log('message', message);
      }
    },
    async mounted(){
      // this.socket = io()
      this.messages = await this.$axios.$get('/api/messages')
    },
    methods: {
      sendMessage() {
        this.$socket.emit('message', { message: this.message })
        // console.log(this.$socket.emit('message', this.message))
        // .socket.emit('message', this.message)
        console.log(this.message)
      },
    }
  }
</script>
        