const path = require('path')

const appConfig = require('mount-config')(path.resolve(__dirname, 'config'))
console.log(appConfig)
const mongoConfig = appConfig.mongo

if (mongoConfig && typeof mongoConfig === 'function') {
  mongoConfig()
}

const app = appConfig.koa

app.listen(appConfig.config.port, () => {
  console.info(`server started on port ${appConfig.config.port} (${appConfig.config.env})`)
})
