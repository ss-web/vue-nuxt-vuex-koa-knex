import Koa from 'koa'
import http from 'http'
import * as options from '../knexfile'
import * as _knex from 'knex';
import { attachPaginate } from 'knex-paginate';

const HOST = '127.0.0.2';
const PORT = 4000;

const app = new Koa(),
      knex = _knex(options.development),
      host = process.env.HOST || HOST,
      port = process.env.PORT || PORT,
      server = http.createServer(app.callback());

attachPaginate();

export {
  app,
  host,
  server,
  knex,
  port
}
