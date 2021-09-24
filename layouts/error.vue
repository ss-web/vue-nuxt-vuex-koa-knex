<template>
  <div class="container">
    <section class="content-txt">
      <div class="error">
				<h1 v-html="title" />
				<p v-html="description" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: "404 - Page not found",
    description: "The page you were looking for could not be found.<br /><br />Please check that you entered the url correctly or have a look at the links at the bottom of the page to find what you were looking for."
  })
};
</script>

<style lang="scss" scoped>
	.error{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: auto;
		max-width: 720px;
		img{
			margin-right: 22px;
		}
	}
</style>
