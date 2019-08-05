
import * as Router from 'koa-router'

const router = new Router();

const messages = router.get('/api', async (ctx, next) => {
    ctx.body = JSON.stringify(await knex.select().from('messages'));
});

export default messages;