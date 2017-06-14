const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  console.log(appConfig)
  ctx.body = appConfig
})

router.post('/login', async (ctx, next) => {
  ctx.body = ctx.request.body
})

module.exports = router
