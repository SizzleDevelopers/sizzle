const express = require('express')
const router = express.Router()
const saveResourceDb = require('../db/db')
const getResourcesDb = require('../db/db')
const config = require('../../knexfile')[process.env.NODE_ENV || 'development']
const knex = require('knex')(config)


// router.get('/', (req, res) => {
//   const connection = knex
//   getResourcesDb.getResources(connection)
//     .then(resources => {
//       res.json(resources)
//     })
// })

router.post('/', (req, res) => {
  const resource = req.body
  resource.user_id = req.user.id
  const connection = knex
  saveResourceDb.saveResources(connection, resource)
    .then(resources => {
      res.send(resources)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})



module.exports = router
