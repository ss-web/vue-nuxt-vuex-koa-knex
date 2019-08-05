import * as Router from 'koa-router'
import * as options from '../../knexfile'
import * as _knex from 'knex'

const knex = _knex(options.development)

const router = new Router()

router.get('/api/messages', async (ctx, next) => {
    ctx.body = JSON.stringify(await knex.select().from('messages'))
});

router.get('/api/posts', async (ctx, next) => {
    ctx.body = JSON.stringify(await knex.select().from('posts'))
});

router.get('/api/posts/:path', async (ctx, next) => {
  const path = (isNaN(ctx.params.path)) ? 'url' : 'id';
  ctx.body = JSON.stringify(await knex('posts').where(path, ctx.params.path))
});

export default router