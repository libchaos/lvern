const { test } = require('ava')
const superkoa = require('superkoa')
const app = require('../config/koa')

test.cb('first test', t => {
  superkoa(app)
    .get('/api/user')
    .expect(200, (err, res) => {
      t.ifError(err)
      // const userId = res.body.i
      t.is(res.text, 'hello koa', 'res.text == hello koa')
      t.end()
    })
})
