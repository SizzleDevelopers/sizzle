const express = require('express')
const router = express.Router()
const saveResourceDb = require('../db/db')
const getResourcesDb = require('../db/db')
const deleteResourceDb = require('../db/db')
const config = require('../../knexfile')[process.env.NODE_ENV || 'development']
const knex = require('knex')(config)


router.get('/', (req, res) => {
  const connection = knex
  getResourcesDb.getResources(connection)
    .then(resources => {
      res.json(resources)
    })
})

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
router.delete('/:id', (req, res) => {
  const connection = knex
  deleteResourceDb.deleteResource(connection, req.params.id)
    .then(() => {
      res.status(204).send({id: req.params.id})
    })
    .catch(err => {
      res.sendStatus(500).send('DATABASE ERROR: ' + err.message)
})
})



router.put('/:id', (req, res) => {
  const resource = req.body
  const connection = knex
  saveResourceDb.updateResource(connection, resource)
    .then(resources => {
      res.sendStatus(204)
    })
    .catch(err => {
      console.error(err.message)
      res.sendStatus(500)
    })
})



module.exports = router
