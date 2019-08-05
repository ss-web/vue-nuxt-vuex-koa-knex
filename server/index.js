import Koa from 'koa'
import { Nuxt, Builder } from 'nuxt'
import * as _io from 'socket.io-client'
import http from 'http'
import rootRouter from './routes'

var server = async function() {
  const app = new Koa(),
        host = process.env.HOST || '127.0.0.1',
        port = process.env.PORT || 3000,
        server = http.createServer(app.callback()),
        io = _io(server)

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

  io.on('connection', client => {
    client.join('messages');
    client.on('message', req => {
        // insertInto(req);
        io.to('messages').emit('message', req.message);
    });
  });
  
  app.use(rootRouter.routes()).use(ctx => {
    ctx.status = 200
    ctx.respond = false // Mark request as handled for Koa
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
}

server()