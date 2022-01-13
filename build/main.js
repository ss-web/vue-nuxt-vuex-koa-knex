require('source-map-support/register');
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./knexfile.js":
/*!*********************!*\
  !*** ./knexfile.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

// console.log(process.env.POSTGRESS_HOST, process.env.POSTGRESS_USER, process.env.POSTGRESS_PASSWORD, process.env.POSTGRESS_DB, process.env.POSTGRESS_CHARSET);
module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      port: '5432',
      //5432
      user: 'postgres',
      password: '1',
      database: 'chat' // connectTimeout: 90000

    },
    pool: {
      min: 0,
      max: 7 // createTimeoutMillis: 3000,
      // acquireTimeoutMillis: 30000,
      // idleTimeoutMillis: 30000,
      // reapIntervalMillis: 1000,
      // createRetryIntervalMillis: 100,
      // propagateCreateError: false

    }
  }
};

/***/ }),

/***/ "./nuxt.config.js":
/*!************************!*\
  !*** ./nuxt.config.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  telemetry: false,

  /*
  ** Headers of the page
  */
  head: {
    title: 'SS-web project(example for usage NUXT)',
    meta: [{
      charset: 'utf-8'
    }, {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }, {
      hid: 'description',
      name: 'description',
      content: 'description'
    }],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
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
    linkExactActiveClass: 'exact-active'
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
  loading: {
    color: '#ffffff'
  },
  css: [],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  modules: ['@nuxtjs/axios'],
  plugins: ['~/assets/styles/index.scss', {
    src: '~/plugins/socket.io.js',
    ssr: false
  }],
  // path for build scss
  styleResources: {
    scss: ['./assets/styles/*.scss']
  },
  buildModules: ['@nuxtjs/style-resources'],

  /*
  ** Build configuration
  */
  build: {
    // optimizations
    // by default ~30 seconds
    parallel: true,
    // ~30 seconds
    cache: true,
    // ~20 seconds
    hardSource: false,
    //true,  // ~20 seconds
    html: {
      minify: {
        minifyJS: true
      }
    },

    /*
    ** Run ESLint on save
    */
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }

  }
};

/***/ }),

/***/ "./server/app.js":
/*!***********************!*\
  !*** ./server/app.js ***!
  \***********************/
/*! exports provided: app, host, server, knex, port */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "app", function() { return app; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "host", function() { return host; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "server", function() { return server; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "knex", function() { return knex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "port", function() { return port; });
/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa */ "koa");
/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _knexfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../knexfile */ "./knexfile.js");
/* harmony import */ var _knexfile__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_knexfile__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var knex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! knex */ "knex");
/* harmony import */ var knex__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(knex__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var knex_paginate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! knex-paginate */ "knex-paginate");
/* harmony import */ var knex_paginate__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(knex_paginate__WEBPACK_IMPORTED_MODULE_4__);





const HOST = '127.0.0.2';
const PORT = 4000;

const app = new koa__WEBPACK_IMPORTED_MODULE_0___default.a(),
      knex = knex__WEBPACK_IMPORTED_MODULE_3__(_knexfile__WEBPACK_IMPORTED_MODULE_2__["development"]),
      host = process.env.HOST || HOST,
      port = process.env.PORT || PORT,
      server = http__WEBPACK_IMPORTED_MODULE_1___default.a.createServer(app.callback());

Object(knex_paginate__WEBPACK_IMPORTED_MODULE_4__["attachPaginate"])();


/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nuxt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nuxt */ "nuxt");
/* harmony import */ var nuxt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nuxt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ "./server/routes/index.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app */ "./server/app.js");
/* harmony import */ var _sockets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sockets */ "./server/sockets.js");





var start = async function () {
  const config = __webpack_require__(/*! ../nuxt.config.js */ "./nuxt.config.js");

  config.dev = !(_app__WEBPACK_IMPORTED_MODULE_2__["app"].env === 'production');
  const nuxt = new nuxt__WEBPACK_IMPORTED_MODULE_0__["Nuxt"](config);

  if (config.dev) {
    const builder = new nuxt__WEBPACK_IMPORTED_MODULE_0__["Builder"](nuxt);
    await builder.build();
  } // app.use(mount('/api', rootRouter.middleware()).use(ctx => {
  //   ctx.status = 200
  //   ctx.respond = false
  //   ctx.req.ctx = ctx
  //   nuxt.render(ctx.req, ctx.res)
  // })
  // add value to database


  _app__WEBPACK_IMPORTED_MODULE_2__["app"].use(_routes__WEBPACK_IMPORTED_MODULE_1__["default"].routes()).use(ctx => {
    ctx.status = 200;
    ctx.respond = false;
    ctx.req.ctx = ctx;
    nuxt.render(ctx.req, ctx.res);
  });
  _app__WEBPACK_IMPORTED_MODULE_2__["server"].listen(_app__WEBPACK_IMPORTED_MODULE_2__["port"], _app__WEBPACK_IMPORTED_MODULE_2__["host"]);
  console.log('Server listening on ' + _app__WEBPACK_IMPORTED_MODULE_2__["host"] + ':' + _app__WEBPACK_IMPORTED_MODULE_2__["port"]);
};

start();

/***/ }),

/***/ "./server/routes/index.js":
/*!********************************!*\
  !*** ./server/routes/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ "koa-router");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app */ "./server/app.js");

 // const koaBody = require('koa-body')

const router = new koa_router__WEBPACK_IMPORTED_MODULE_0__();
router.get('/api', async (ctx, next) => {
  ctx.body = JSON.stringify({
    status: 'OK'
  });
});
router.get('/api/messages', async (ctx, next) => {
  ctx.body = JSON.stringify(await _app__WEBPACK_IMPORTED_MODULE_1__["knex"].select().from('messages'));
});
router.get('/api/posts', async (ctx, next) => {
  // content - can have strong weight
  const currentPage = isNaN(ctx.query.page) ? 1 : ctx.query.page,
        params = ['id', 'url', 'pagetitle', 'status', 'title', 'created_on'],
        body = JSON.stringify(await Object(_app__WEBPACK_IMPORTED_MODULE_1__["knex"])('posts').select(params).groupBy(params).orderBy('title').paginate({
    perPage: 10,
    currentPage
  }));
  ctx.body = ctx.query.page !== undefined && isNaN(ctx.query.page) ? [] : body;
});
router.get('/api/posts/:path', async (ctx, next) => {
  const path = isNaN(ctx.params.path) ? 'url' : 'id';
  ctx.body = JSON.stringify(await Object(_app__WEBPACK_IMPORTED_MODULE_1__["knex"])('posts').select().where(path, ctx.params.path));
});
router.post('/api/auth', // koaBody({ multipart: true }),
async (ctx, next) => {
  const user = JSON.stringify(await Object(_app__WEBPACK_IMPORTED_MODULE_1__["knex"])('users').select('email').where('email', 'admin@mail.ru'));
  console.log(user); // здесь сравню emails

  ctx.body = {
    token: 'token',
    role: 2
  };
});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./server/sockets.js":
/*!***************************!*\
  !*** ./server/sockets.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./server/app.js");
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io */ "socket.io");
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_1__);



const io = socket_io__WEBPACK_IMPORTED_MODULE_1__(_app__WEBPACK_IMPORTED_MODULE_0__["server"]);

io.sockets.on('connection', client => {
  console.log('a user connected: ' + client.id);
  client.join('messages');
  client.on('message', req => {
    insertInto(req);
    io.to('messages').emit('message', req.message);
  }); // statuses

  client.join('statuses');
  client.on('status', req => {
    Object(_app__WEBPACK_IMPORTED_MODULE_0__["knex"])('posts').where({
      id: req.id
    }).update('status', req.status).then(() => {
      console.log(req);
    });
    io.to('statuses').emit('status', req.status);
  });
});

const insertInto = req => {
  req.idroom = 'messages';
  _app__WEBPACK_IMPORTED_MODULE_0__["knex"].insert([req], ['id']).into('messages').then(() => {
    console.log(req);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (io);

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "knex":
/*!***********************!*\
  !*** external "knex" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("knex");

/***/ }),

/***/ "knex-paginate":
/*!********************************!*\
  !*** external "knex-paginate" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("knex-paginate");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),

/***/ "nuxt":
/*!***********************!*\
  !*** external "nuxt" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ })

/******/ });
//# sourceMappingURL=main.map