<template>
	<div class="navigation">
		<div class="filter" :class="{'active': showCategories}" @click="toogleCategories" v-html="'filter'" />
		<div v-if="showCategories" class="categories">
			<div v-for="c in categories" :key="c.ID" class="category">
				<nuxt-link class="nav-bar--link" :to="`${c.slug}`" v-html="c.name" />
			</div>
		</div>
	</div>
</template>


<script>
export default {
	props: ['categories'],

	data() {
		return {
			showCategories: false
		}
	},

	methods: {
		toogleCategories() {
			this.showCategories = !this.showCategories;
		}
	}
}
</script>



<style lang="scss" scoped>
	nav{
		display: flex;
		flex-direction: column;
		color: $blue;
	}
	.filter{
		background: $blue;
		cursor: pointer;
		display: inline-flex;
		font-size: 18px;
		color: $white;
		border-radius: 4px;
		padding: 8px 16px;
		&.active{
			border-radius: 4px 4px 0px 0px;
		}
	}
	.navigation{
		padding: 0 10px;
		margin-bottom: 20px;
	}
	.categories{
		background-color: $blue;
		padding: 8px 0;
		border-radius: 0 4px;
		position: absolute;
		overflow: auto;
		height: 300px;
		*{
			color: $white;
			display: flex;
			padding: 8px;
		}
	}
</style>
