<template>
	<div>
		<div class="container">
			<section class="content-local content-txt">
				<header>
					<section>
						<h1 v-html="card.title" class="title" />
						<span class="date">{{formatDate(card.date)}}</span>
					</section>
					<img :src="card.featured_image" alt="" class="featured_image" />
				</header>
				<article v-html="card.content" />
			</section>
			<div class="author-block">
				<Author :author="card.author" />
			</div>
		</div>
	</div>
</template>

<script>
import formatDate from '~/mixins/formatDate';

export default {
	async fetch({store, params}){
		await store.dispatch('card/fetch', params.slug);
	},

	head () {
		return {
			title: `SS-web - Post | ${this.card.title}`,
			meta: [
				{ hid: 'description', name: 'description', content: '' }
			]
		};
	},

	mixins: [formatDate],

	computed: {
		card() {
			return this.$store.getters['card/data'];
		}
	}
}
</script>

<style scoped lang="scss">
.author-block{
	display: flex;
	justify-content: flex-end;
	padding: 20px 0 0;
}
.content-local{
	.title{
		margin-top: 0;
	}
	.featured_image{
		border-radius: 8px;
		margin-top: 20px;
	}
}
header{
	display: flex;
	flex-direction: column;
}
</style>
