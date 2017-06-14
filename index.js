const path = require('path')

const appConfig = global.appConfig = require('mount-config')(path.resolve(__dirname, 'config'))
const appModels = global.appModels = require('mount-models')(path.resolve(__dirname, './app/models'))
const mongoConfig = appConfig.mongo

if (mongoConfig && typeof mongoConfig === 'function') {
  mongoConfig()
}

const app = appConfig.koa

app.listen(appConfig.config.port || 4040, () => {
  console.info(`server started on port ${appConfig.config.port} (${appConfig.config.env})`)
})
