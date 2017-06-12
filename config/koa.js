const Koa = require('koa')
const logger = require('koa-logger')
const methodOverride = require('koa-methodoverride')
const bodyParser = require('koa-bodyparser')
const compress = require('koa-compress')
const cors = require('kcors')
const router = require('koa-router')()
const mount = require('mount-koa-routes')
const path = require('path')

const config = require('./config')
const app = new Koa()

if (config.env === 'development') {
  app.use(logger())
}

app.use(bodyParser())
app.use(compress())
app.use(methodOverride())
app.use(cors())

// 自动挂在app/routes/目录下的route， true表示是否打印日志， 会按照多层文件夹去嵌套
mount(app, path.resolve(__dirname, '../app/routes'), true)

app.use(router.routes(), router.allowedMethods())

app.on('error', (err, ctx) => {
  console.error(err)
  logger.error('server error', err, ctx)
})

module.exports = app
