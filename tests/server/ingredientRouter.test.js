const test = require('ava')
const request = require('supertest')
const createServer = require('../../server/server')
const setupDb = require('./setup-db-auth')


setupDb(test, createServer)

test.cb('GET /ingredients works', t => {
  request(t.context.app)
    .get('/api/v1/ingredients')
    .set('Authorization', `Bearer ${t.context.token}`)
    .expect(200)
    .end((err, res) => {
      t.ifError(err)
      t.true(res.body.length != 0)
      t.end()
    })
})
