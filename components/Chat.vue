<template>
<div class="row">
  <div class="col-xs-12 col-sm-4">
    <form>
      <div class="form-group">
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write your message"></textarea>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary mb-2">Send</button>
      </div>
    </form>
  </div>
  <div class="col-xs-12 col-sm-8">
    <ul class="list-group">
      <li class="list-group-item" v-for="message of messages" :key="message">
        {{message.message}}
      </li>
    </ul>
  </div>
</div>
</template>

<script>
  export default {
    data: () => ({
      messages: []
    }),
    async mounted(){
      this.messages = await this.$axios.$get('/api/messages')
    }
  }
</script>
        