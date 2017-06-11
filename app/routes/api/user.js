const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  ctx.body = 'hello koa'
})

router.post('/login', async (ctx, next) => {
  ctx.body = ctx.request.body
})

module.exports = router
