<template>
  <section>
    <h1>{{pageTitle}}</h1>
    <br>
    <!-- <pre>
      {{posts}}
    </pre> -->
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">url</th>
          <th scope="col">title</th>
          <th scope="col">pagetitle</th>
          <th scope="col">status</th>
          <th scope="col">created_on</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post of posts.data" :key="post.id" :class="post.status === 1 ? 'bg-light' : 'bg-white'">
          <th scope="row">{{post.id}}</th>
          <td>{{post.url}}</td>
          <td>{{post.title}}</td>
          <td>{{post.pagetitle}}</td>
          <td>
            <template v-if="selectStatusesShow">{{post.status}}</template>
            <div class="form-group" v-else>
              <select class="form-control" @change="changeStatus($event, post.id)">
                <option 
                  v-for="item of statuses" 
                  :value="item.id"
                  :selected="item.id == post.status ? 'selected' : ''"
                  :key="item.id">
                  {{item.name}}
                </option>
              </select>
            </div>
          </td>
          <td>{{post.created_on}}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>  
  export default {
    middleware: ['auth'],
    async fetch({store}){
      if (store.getters['posts/posts'].length === 0) {
        console.log(store.getters['posts/posts'])
        await store.dispatch('posts/fetch')
      }
    },
    data: () => ({
      pageTitle: 'All posts',
      statuses: [
        { id: 1 , name: 'active' },
        { id: 2 , name: 'delay' },
        { id: 3 , name: 'no-active' }
      ]
    }),
    computed: {
      posts() {
        return this.$store.getters['posts/posts']
      },
      selectStatusesShow() {
        const role = this.$store.getters['auth/getRole']
        return (role === 1) ? true : false
      }
    },
    methods: {
      openPage(path) {
        this.$router.push('/blog/' + path.url)
      },
      changeStatus(event, idPost) {
        const changes = {
          id: idPost,
          status: Number(event.target.value)
        }
        this.$store.dispatch("posts/changeStatus", changes);
        this.$socket.emit('status', changes)
      },
    }
  }
</script>
