const test = require('ava')
const request = require('supertest')
const app = require('../../server/server')
const setupDb = require('./setup-db')


setupDb(test, app)

test.cb('Authenticate complains about no credentials', t => {
  request(t.context.app)
    .get('/api/v1/ingredients')
    .send({})
    .expect(200)
    .end((err, res) => {
      t.ifError(err)
      t.true(res.body.length != 0)
      t.end()
    })
})
