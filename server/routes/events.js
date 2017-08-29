const express = require('express')
const router = express.Router()
const {
  getEvents,
  saveEvent
} = require('../db/db')


router.get('/', (req, res) => {
  const db = req.app.get('db')
  getEvents(db)
    .then(events => {
      res.json(events)
    })
    .catch(err => console.error(err.message))
})

router.post('/', (req, res) => {
  const db = req.app.get('db')
  saveEvent(db, req.body)
    .then(() => {
      res.send(req.body)
    })
    .catch(err => console.error(err.message))
})


module.exports = router