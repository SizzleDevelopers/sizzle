const express = require('express')
const router = express.Router()
const getEventsDb = require('../db/db')
const saveEventsDb = require('../db/db')
const config = require('../../knexfile')[process.env.NODE_ENV || 'development']
const knex = require('knex')(config)


router.get('/', (req, res) => {
  const connection = knex
  getEventsDb.getEvents(connection)
    .then(events => {
      res.json(events)
    })
})

router.post('/', (req, res) => {

  const connection = knex
  saveEventsDb.saveEvents(connection, req.body)
    .then(events => {
      res.send(events)
    })
    .catch(err => {
    })
})


module.exports = router
