<template>
  <div class="header">
    <div class="container">
      <div class="row">
        <div class="col-xs-6">
          <nav class="menu">
            <nuxt-link v-for="l in links" :key="l.name" :to="l.path" v-html="l.name" />
          </nav>
        </div>
        <div class="col-xs-6">
          <div class="logo">
            <a :href="customerLink" target="_blank">
							Login
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    customerLink: "/login",
    links: [{
      name: 'Chat',
      path: '/'
    },{
      name: 'Blog',
      path: '/blog'
    }]
  })
}
</script>

<style lang="scss" scoped>
	.header{
		background: $white;
		box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
		padding: 20px 0;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 999;
	}
	.logo {
		display: flex;
		justify-content: flex-end;
		img{
			width: 180px;
		}
	}
	.menu{
		align-items: center;
		display: flex;
		height: 100%;
		a{
			color: $blue;
			margin-right: 10px;
			font-size: 18px;
			transition: .25s;
			font-weight: bold;
			&.active{
				color: $dark;
			}
			&:hover{
				color: $blue-hover;
			}
		}
	}
</style>
