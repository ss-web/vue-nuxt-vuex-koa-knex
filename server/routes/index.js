import * as Router from 'koa-router'
import * as options from '../../knexfile'
// import '../plugins/paginate'
import * as _knex from '../plugins/paginate'

const knex = _knex(options.development)

const router = new Router()

router.get('/api/messages', async (ctx, next) => {
    ctx.body = JSON.stringify(await knex.select().from('messages'))
});

router.get('/api/posts', async (ctx, next) => {
  // content - can have strong weight
  const page = (isNaN(ctx.query.page)) ? 1 : ctx.query.page,
        params = ['id','url', 'pagetitle', 'title', 'created_on'],
        body = JSON.stringify(await knex('posts').select(params).groupBy(params).orderBy('title').paginate(3, page))
  ctx.body = (ctx.query.page !== undefined && isNaN(ctx.query.page)) ? [] : body
});

router.get('/api/posts/:path', async (ctx, next) => {
  const path = (isNaN(ctx.params.path)) ? 'url' : 'id';
  ctx.body = JSON.stringify(await knex('posts').select().where(path, ctx.params.path))
});


export default router