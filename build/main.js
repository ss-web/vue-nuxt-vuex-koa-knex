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

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: '1',
      database: 'chat'
    },
    pool: {
      min: 0,
      max: 7
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
  /*
  ** Headers of the page
  */
  head: {
    title: 'app title',
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

  /*
  ** Customize the progress bar color
  */
  loading: {
    color: '#ffffff'
  },
  css: ['~/node_modules/bootstrap/dist/css/bootstrap.min.css'],
  modules: ['@nuxtjs/axios'],
  plugins: [{
    src: '~/plugins/socket.io.js',
    ssr: false
  }],

  /*
  ** Build configuration
  */
  build: {
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

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa */ "koa");
/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nuxt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nuxt */ "nuxt");
/* harmony import */ var nuxt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nuxt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io */ "socket.io");
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes */ "./server/routes/index.js");
/* harmony import */ var _knexfile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../knexfile */ "./knexfile.js");
/* harmony import */ var _knexfile__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_knexfile__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _plugins_paginate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plugins/paginate */ "./server/plugins/paginate.js");
/* harmony import */ var _plugins_paginate__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_plugins_paginate__WEBPACK_IMPORTED_MODULE_6__);








const knex = _plugins_paginate__WEBPACK_IMPORTED_MODULE_6__(_knexfile__WEBPACK_IMPORTED_MODULE_5__["development"]); // import { app, host, port } from './app'


const app = new koa__WEBPACK_IMPORTED_MODULE_0___default.a(),
      host = process.env.HOST || '127.0.0.1',
      port = process.env.PORT || 3000,
      server = http__WEBPACK_IMPORTED_MODULE_3___default.a.createServer(app.callback()),
      io = socket_io__WEBPACK_IMPORTED_MODULE_2__(server);

io.on('connection', socket => {
  console.log('io Connected');
  socket.emit('newMessage', {
    text: 'WHAT'
  });
});
io.sockets.on('connection', client => {
  console.log('a user connected: ' + client.id);
  client.join('messages');
  client.on('message', req => {
    insertInto(req);
    io.to('messages').emit('message', req.message);
  }); // statuses

  client.join('statuses');
  client.on('status', req => {
    knex('posts').where({
      id: req.id
    }).update('status', req.status).then(() => {
      console.log(req);
    });
    io.to('statuses').emit('status', req.status);
  });
});

function insertInto(req) {
  req.idroom = 'messages';
  knex.insert([req], ['id']).into('messages').then(() => {
    console.log(req);
  });
}

var start = async function () {
  const config = __webpack_require__(/*! ../nuxt.config.js */ "./nuxt.config.js");

  config.dev = !(app.env === 'production');
  const nuxt = new nuxt__WEBPACK_IMPORTED_MODULE_1__["Nuxt"](config);

  if (config.dev) {
    const builder = new nuxt__WEBPACK_IMPORTED_MODULE_1__["Builder"](nuxt);
    await builder.build();
  } // app.use(mount('/api', rootRouter.middleware()).use(ctx => {
  //   ctx.status = 200
  //   ctx.respond = false
  //   ctx.req.ctx = ctx
  //   nuxt.render(ctx.req, ctx.res)
  // })
  // add value to database


  app.use(_routes__WEBPACK_IMPORTED_MODULE_4__["default"].routes()).use(ctx => {
    ctx.status = 200;
    ctx.respond = false;
    ctx.req.ctx = ctx;
    nuxt.render(ctx.req, ctx.res);
  });
  server.listen(port, host); // app.listen(port, host)

  console.log('Server listening on ' + host + ':' + port);
};

start();

/***/ }),

/***/ "./server/plugins/paginate.js":
/*!************************************!*\
  !*** ./server/plugins/paginate.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function (dbConfig) {
  var knex = __webpack_require__(/*! knex */ "knex")(dbConfig);

  var KnexQueryBuilder = __webpack_require__(/*! knex/lib/query/builder */ "knex/lib/query/builder");

  KnexQueryBuilder.prototype.paginate = function (per_page, current_page) {
    var pagination = {};
    var per_page = per_page || 10;
    var page = current_page || 1;
    if (page < 1) page = 1;
    var offset = (page - 1) * per_page;
    return Promise.all([this.clone().count('* as count').first(), this.offset(offset).limit(per_page)]).then(([total, rows]) => {
      var count = total.count;
      var rows = rows;
      pagination.total = count;
      pagination.per_page = per_page;
      pagination.offset = offset;
      pagination.to = offset + rows.length;
      pagination.last_page = Math.ceil(count / per_page);
      pagination.current_page = page;
      pagination.from = offset;
      pagination.data = rows;
      return pagination;
    });
  };

  knex.queryBuilder = function () {
    return new KnexQueryBuilder(knex.client);
  };

  return knex;
};

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
/* harmony import */ var _knexfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../knexfile */ "./knexfile.js");
/* harmony import */ var _knexfile__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_knexfile__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _plugins_paginate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../plugins/paginate */ "./server/plugins/paginate.js");
/* harmony import */ var _plugins_paginate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_plugins_paginate__WEBPACK_IMPORTED_MODULE_2__);



 // const koaBody = require('koa-body')

const knex = _plugins_paginate__WEBPACK_IMPORTED_MODULE_2__(_knexfile__WEBPACK_IMPORTED_MODULE_1__["development"]);

const router = new koa_router__WEBPACK_IMPORTED_MODULE_0__();
router.get('/api/messages', async (ctx, next) => {
  ctx.body = JSON.stringify((await knex.select().from('messages')));
});
router.get('/api/posts', async (ctx, next) => {
  // content - can have strong weight
  const page = isNaN(ctx.query.page) ? 1 : ctx.query.page,
        params = ['id', 'url', 'pagetitle', 'status', 'title', 'created_on'],
        body = JSON.stringify((await knex('posts').select(params).groupBy(params).orderBy('title').paginate(3, page)));
  ctx.body = ctx.query.page !== undefined && isNaN(ctx.query.page) ? [] : body;
});
router.get('/api/posts/:path', async (ctx, next) => {
  const path = isNaN(ctx.params.path) ? 'url' : 'id';
  ctx.body = JSON.stringify((await knex('posts').select().where(path, ctx.params.path)));
});
router.post('/api/auth', // koaBody({ multipart: true }),
async (ctx, next) => {
  const user = JSON.stringify((await knex('users').select('email').where('email', 'admin@mail.ru')));
  console.log(user); // здесь сравню emails

  ctx.body = {
    token: 'token',
    role: 2
  };
});
/* harmony default export */ __webpack_exports__["default"] = (router);

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

/***/ "knex/lib/query/builder":
/*!*****************************************!*\
  !*** external "knex/lib/query/builder" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("knex/lib/query/builder");

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