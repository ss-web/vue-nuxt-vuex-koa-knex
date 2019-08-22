<template>
  <form class="form-login" @submit.prevent="onSubmit">
    <h1>Auth</h1>
    <div class="form-group">
      <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    </div>
    <div class="form-group">
      <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
    </div>
    <button type="submit" class="btn btn-success">Submit</button>
    <nuxt-link class="btn btn-primary" to="/">Back to main</nuxt-link>
  </form>                         
</template>

<script>
export default {
    name: 'Auth',
    layout: 'empty',
    data(){
        return{
            email: '',
            password: '',
            valid: false
        }
    },
    methods:{
        onSubmit(){
          if (!!this.email && !!this.password){
            const { email, password } = this
            this.$store.dispatch('auth/login', { email, password }).then(() => {
              this.$router.push('/blog')
            })
          } else {
            alert('Заполните оба поля')
          }
        }
    }
}
</script>


<style scoped>
  .form-login{
    margin: 80px auto;
    max-width: 480px;
  }
</style>
