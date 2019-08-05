import * as Router from 'koa-router'
import * as options from '../knexfile'
import * as _knex from 'knex'

const knex = _knex(options.development)

const router = new Router()

router.get('/api/messages', async (ctx, next) => {
    ctx.body = JSON.stringify(await knex.select().from('messages'))
});

export default router

// const Router = require('koa-router');
// const router = new Router();

// router.get('/api', async (ctx, next) => {
//     ctx.body = 'test'
// });

// module.exports = router;