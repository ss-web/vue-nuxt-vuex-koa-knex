<template>
	<div class="col-sm-12 col-md-6 col-lg-4 local-col">
		<nuxt-link class="post" :to="`blog/${post.slug}`">
			<img :src="post.post_thumbnail.guid" alt="" />
			<span class="content">
				<span>
					<span class="date">{{formatDate(post.date)}}</span>
				</span>
				<span class="bottom">
					<span class="title" v-html="post.title" />
					<span class="tags">
						<span v-for="c in categoriesNames" :key="c" class="tag" v-html="c" />
					</span>
				</span>
			</span>
		</nuxt-link>
	</div>
</template>


<script>
import formatDate from '~/mixins/formatDate';

export default {
	mixins: [formatDate],

	props: ['post'],

	computed: {
		categoriesNames() {
			return Object.keys(this.post.categories);
		}
	}
}
</script>

<style lang="scss" scoped>
	.local-col{
		margin-bottom: 20px;
	}
	.bottom{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;
	}
	.post{
		background-color: $white;
		border-radius: 8px;
		display: flex;
		flex-direction: column;
		text-decoration: none;
		overflow: hidden;
		height: 100%;
		transition: .25s;
		&:hover{
			box-shadow: $hover-gradient;
		}
		img{
			object-fit: cover;
			display: flex;
			min-height: 280px;
			max-height: 280px;
		}
		.content{
			padding: 20px;
			display: flex;
			flex-direction: column;
			height: inherit;
			justify-content: space-between;
			.title{
				color: $dark;
				font-weight: bold;
				margin-top: 10px;
				font-size: 18px;
			}
		}
	}
	.tags{
		margin-top: 20px;
		.tag{
			border: 1px solid $blue-hover;
			color: $blue-hover;
			display: inline-flex;
			font-size: 12px;
			margin-right: 10px;
			padding: 4px;
			border-radius: 4px;
		}
	}
</style>
