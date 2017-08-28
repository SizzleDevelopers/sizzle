import 'babel-polyfill' // async/await
import test from 'ava'
import request from 'supertest'
const app = require('../../server/server')
const setupDb = require('./setup-db')
const {
  getEvents
} = require('../../server/db/db')


setupDb(test, app)

test('GET /events works', async t => {
  const res = await request(t.context.app)
    .get('/events')

  t.is(res.status, 200, 'has wrong response status code')
  const apiEvents = res.body
  const dbEvents = await getEvents(t.context.db)
  t.is(apiEvents.length, dbEvents.length, 'not all events from db returned from api')
  t.deepEqual(dbEvents,  'events content corrupt in db')

})


test('POST /events works', async t => {
  const newEvent = {
    title: 'a new event',
    description: 'with a description',
    user_id: 1,
    date: new Date(),
    is_am: true
  }

  const res = await request(t.context.app)
    .post('/events')
    .send(newEvent)

  t.is(res.status, 200, 'has wrong response status code')
  t.deepEqual(res.body, newEvent)


  const events = await getEvents(t.context.db)
  t.is(events.length, 4, 'event not saved to db')
  t.deepEqual(events[events.length - 1], newEvent, 'event content corrupt in db')
})