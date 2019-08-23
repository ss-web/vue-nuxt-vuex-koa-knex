import { Nuxt, Builder } from 'nuxt'
import rootRouter from './routes'
import { app, server, host, port } from './app'
import './sockets'

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
  console.log('Server listening on ' + host + ':' + port)
}

start()
