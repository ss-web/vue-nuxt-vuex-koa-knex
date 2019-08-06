import * as Router from 'koa-router'
import * as options from '../../knexfile'
import * as _knex from 'knex'

const knex = _knex(options.development)

const router = new Router()

router.get('/api/messages', async (ctx, next) => {
    ctx.body = JSON.stringify(await knex.select().from('messages'))
});

router.get('/api/posts', async (ctx, next) => {
  // content - can have strong weight
  const params = ['id','url', 'pagetitle', 'title', 'created_on']
  ctx.body = JSON.stringify(await knex.select(params).from('posts'))
});

router.get('/api/posts/:path', async (ctx, next) => {
  const path = (isNaN(ctx.params.path)) ? 'url' : 'id';
  ctx.body = JSON.stringify(await knex('posts').select(['id','content']).where(path, ctx.params.path))
});


export default router