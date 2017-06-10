const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  ctx.body = 'this is a user response'
})

router.post('/login', async (ctx, next) => {
  ctx.body = ctx.request.body
})

module.exports = router
