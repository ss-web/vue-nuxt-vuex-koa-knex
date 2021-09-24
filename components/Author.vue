<template>
  <section class="author">
    <img :src="author.avatar_URL" alt="" />
    <div class="author-content">
      <a :href="author.URL" :class="author.URL&&'active'">@{{author.login && author.nice_name}}</a>
      <p>{{author.name}} </p>
    </div>
  </section>
</template>

<script>
export default {
  props: ['author']
}
</script>

<style lang="scss" scoped>
.author{
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
  align-items: center;
  background-color: $blue;
  border-radius: 8px;
  display: inline-flex;
  max-width: 280px;
  overflow: hidden;
  width: 100%;
  &-content{
    padding: 0 12px;
    *{
      color: $white;
    }
    p{
      font-weight: bold;
      margin: 10px 0 0;
    }
    a{
      pointer-events: none;
      text-decoration: none;
      &.active{
        pointer-events: auto;
        text-decoration: underline;
      }
    }
  }
}
</style>
