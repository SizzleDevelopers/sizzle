const express = require('express')
const router = express.Router()
const getIngredientsDb = require('../db/db')
const saveIngredientsDb = require('../db/db')
const config = require('../../knexfile')[process.env.NODE_ENV || 'development']
const knex = require('knex')(config)


router.get('/', (req, res) => {
  const connection = knex
  getIngredientsDb.getIngredients(connection)
    .then(attendance => {
      res.json(attendance)
    })
})

router.post('/', (req, res) => {

  const connection = knex
  saveIngredientsDb.saveIngredients(connection, req.body)
    .then(attendance => {
      res.send(attendance)
    })
    .catch(err => {
    })
})


module.exports = router
