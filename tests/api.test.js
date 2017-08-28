const test = require('ava')
const request = require('supertest')

const createServer = require('../server/server')
const setupDb = require('./server/setup-db')

setupDb(test, createServer)

test.cb('Authenticate complains about no credentials', t => {
  request(t.context.app)
    .post('/api/v1/authenticate')
    .send({})
    .expect(403)
    .end((err, res) => {
      t.ifError(err)
      t.is(res.body.info, 'Missing credentials')
      t.end()
    })
})

test.cb('/api/v1/quote responds without token', t => {
  request(t.context.app)
    .get('/api/v1/quote')
    .end((err, res) => {
      t.ifError(err)
      t.deepEqual(res.body, { message: 'This is a PUBLIC quote.' })
      t.end()
    })
})

test.cb("/api/v1/secret 403's without token", t => {
  request(t.context.app)
    .get('/api/v1/secret')
    .expect(403)
    .end((err, res) => {
      t.ifError(err)
      t.is(res.body.error, 'No authorization token was found')
      t.end()
    })
})
