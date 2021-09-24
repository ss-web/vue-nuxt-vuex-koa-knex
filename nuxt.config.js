module.exports = {
	telemetry: false,

  /*
  ** Headers of the page
  */
  head: {
    title: 'SS-web project',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'description' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

	env: {
		apiAuthHeader: process.env.APP_API_URL
	},

	// Axios nain path
  axios: {
		proxy: true
	},

  // class for active links in nav
	router: {
		linkActiveClass: 'active',
		linkExactActiveClass: 'exact-active',
	},

  // path for connection
	publicRuntimeConfig: {
		axios: {
			withCredentials: true,
			baseURL: process.env.APP_API_URL
		}
	},

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#ffffff' },

	css: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  modules: [
    '@nuxtjs/axios'
  ],

  plugins: [
		'~/assets/styles/index.scss',
    { src: '~/plugins/socket.io.js', ssr: false }
  ],

  // path for build scss
	styleResources: {
		scss: ['./assets/styles/*.scss']
	},

	buildModules: [
    '@nuxtjs/style-resources'
  ],

  /*
  ** Build configuration
  */
  build: {
		// optimizations
		// by default ~30 seconds
		parallel: true, // ~30 seconds
		cache: true, // ~20 seconds
		hardSource: false, //true,  // ~20 seconds

		html: {
			minify: {
				minifyJS: true
			}
		},

    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

