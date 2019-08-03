import Koa from 'koa'
import * as Router from 'koa-router'
import * as options from './knexfile'
import * as _knex from 'knex'
import io from 'socket.io-client'
import { Nuxt, Builder } from 'nuxt'

var server = async function() {
  const app = new Koa()
  const host = process.env.HOST || '127.0.0.1'
  const port = process.env.PORT || 3000
  const knex = _knex(options.development)

  // Import and Set Nuxt.js options
  const config = require('../nuxt.config.js')
  config.dev = !(app.env === 'production')

  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  const router = new Router();
  router.get('/api', async (ctx, next) => {
    let messages;
    await knex.select().from('messages').timeout(1000).then(res => {
        messages = JSON.stringify(res);
    });
    ctx.body = messages;
  });
  // chat
  // io.on('connection', client => {
  //   client.join('messages');
  //   client.on('message', req => {
  //       insertInto(req);
  //       io.to('messages').emit('message', req.message);
  //   });
  // });
  
  app.use(router.routes()).use(ctx => {
    ctx.status = 200
    ctx.respond = false // Mark request as handled for Koa
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
}

server()