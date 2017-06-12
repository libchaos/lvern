const mongoose = require('mongoose')
const util = require('util')

const config = require('./config')
const debug = require('debug')('lvern:mongo')
mongoose.Promise = global.Promise

function mongoConfig (opts) {
  const mongoUri = config.mongo.host

  mongoose.connect(mongoUri, {server: opts || {socketOptions: {keepAlive: 1}}})
  mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${mongoUri}`)
  })

  if (config.MONGOOSE_DEBUG) {
    mongoose.set('debug', (collectionName, method, query, doc) => {
      debug(`${collectionName}.${method}`, util.inspect(query, false, 20), doc)
    })
  }
}

module.exports = mongoConfig
