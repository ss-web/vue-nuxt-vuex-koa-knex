<template>
	<div class="template">
		<div>
			<Header />
			<main class="content">
				<nuxt />
			</main>
		</div>
		<Footer />
	</div>
</template>

<style lang="scss" scoped>
	.template{
		background-color: $grey-light;
		min-height: 100.1vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.content{
		margin-top: 100px;
	}
</style>
