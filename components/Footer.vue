<template>
  <div class="footer">
    <div class="container">
      <p>Copyright © {{currentYear === START_PROJECT_DATE ? currentYear : `${START_PROJECT_DATE} - ${currentYear}`}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    START_PROJECT_DATE: 2021
  }),

  computed: {
    currentYear() {
      const d = new Date();
      return d.getFullYear();
    }
  }
}
</script>

<style lang="scss" scoped>
  .footer{
    background-color: $grey-light;
    margin-top: 40px;
    display: flex;
    padding: 40px 0;
    justify-content: center;
    align-items: center;
    nav{
      display: flex;
      a{
        padding: 0 10px;
      }
    }
    p{
      text-align: center;
    }
  }
</style>
