const Koa = require('koa')
const logger = require('koa-logger')
const methodOverride = require('koa-methodoverride')
const bodyParser = require('koa-bodyparser')
const compress = require('koa-compress')
const cors = require('cors')
const config = require('./config')

const app = new Koa()

if (config.env === 'development') {
  app.use(logger())
}

app.use(bodyParser())
app.use(compress())
app.use(methodOverride())
app.use(cors())

module.exports = app
