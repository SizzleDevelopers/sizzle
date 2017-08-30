var test = require('ava')
var request = require('supertest')

var createServer = require('../server/server')
var db = require('../server/db/db')
var setupDb = require('./server/setup-db')


setupDb(test,createServer)

test.cb('read resources db', t => {
  db.getResources(t.context.db)
    .then(resources => {
      t.is(resources.length, 3)
      t.true(resources[0].hasOwnProperty('type'))
      t.end()
    })
})
