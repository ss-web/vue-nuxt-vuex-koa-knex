import * as Router from 'koa-router'
import { knex } from '../app'

// const koaBody = require('koa-body')

const router = new Router()

router.get('/api/messages', async (ctx, next) => {
    ctx.body = JSON.stringify(await knex.select().from('messages'))
});

router.get('/api/posts', async (ctx, next) => {
  // content - can have strong weight
  const page = (isNaN(ctx.query.page)) ? 1 : ctx.query.page,
        params = ['id','url', 'pagetitle', 'status', 'title', 'created_on'],
        body = JSON.stringify(await knex('posts').select(params).groupBy(params).orderBy('title').paginate(3, page))
  ctx.body = (ctx.query.page !== undefined && isNaN(ctx.query.page)) ? [] : body
});

router.get('/api/posts/:path', async (ctx, next) => {
  const path = (isNaN(ctx.params.path)) ? 'url' : 'id';
  ctx.body = JSON.stringify(await knex('posts').select().where(path, ctx.params.path))
});

router.post('/api/auth', 
// koaBody({ multipart: true }),
 async (ctx, next) => {
  const user = JSON.stringify(await knex('users').select('email').where('email', 'admin@mail.ru'))
  console.log(user); // здесь сравню emails
  ctx.body = {
    token: 'token',
    role: 2
  }
});

export default router