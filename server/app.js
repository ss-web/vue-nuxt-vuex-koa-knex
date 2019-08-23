import Koa from 'koa'
import http from 'http'
import * as options from './knexfile'
import * as _knex from './plugins/paginate'

const app = new Koa(),
      knex = _knex(options.development),
      host = process.env.HOST || '127.0.0.1',
      port = process.env.PORT || 3000,
      server = http.createServer(app.callback())

export {
  app,
  host,
  server,
  knex,
  port
}