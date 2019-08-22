import Koa from 'koa'
import { Nuxt, Builder } from 'nuxt'
import * as _io from 'socket.io'
import http from 'http'
import rootRouter from './routes'
import * as options from '../knexfile'
import * as _knex from './plugins/paginate'

const knex = _knex(options.development)
// import { app, host, port } from './app'

const app = new Koa(),
      host = process.env.HOST || '127.0.0.1',
      port = process.env.PORT || 3000,
      server = http.createServer(app.callback()),
      io = _io(server)

io.on('connection', socket => {
  console.log('io Connected')
  socket.emit('newMessage', {
    text: 'WHAT'
  })
})

io.sockets.on('connection', client => {
  console.log('a user connected: ' + client.id)
  client.join('messages');
  client.on('message', req => {
    insertInto(req);
    io.to('messages').emit('message', req.message);
  });

  // statuses
  client.join('statuses');
  client.on('status', req => {
    knex('posts').where({ id: req.id }).update('status', req.status)
      .then(() => {
        console.log(req)
      });
    io.to('statuses').emit('status', req.status);
  });
})

function insertInto(req){
  req.idroom = 'messages';
  knex.insert([req], ['id']).into('messages')
    .then(() => {
      console.log(req)
    });
}

var start = async function() {
  const config = require('../nuxt.config.js')
  config.dev = !(app.env === 'production')

  const nuxt = new Nuxt(config)

  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }
  
  // app.use(mount('/api', rootRouter.middleware()).use(ctx => {
  //   ctx.status = 200
  //   ctx.respond = false
  //   ctx.req.ctx = ctx
  //   nuxt.render(ctx.req, ctx.res)
  // })
  // add value to database

  app.use(rootRouter.routes()).use(ctx => {
    ctx.status = 200
    ctx.respond = false
    ctx.req.ctx = ctx
    nuxt.render(ctx.req, ctx.res)
  })
  server.listen(port, host)
  // app.listen(port, host)
  console.log('Server listening on ' + host + ':' + port)
}

start()
