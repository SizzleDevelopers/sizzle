const express = require('express')
const router = express.Router()
const getSkillsDb = require('../db/db')
const saveSkillsDb = require('../db/db')
const config = require('../../knexfile')[process.env.NODE_ENV || 'development']
const knex = require('knex')(config)


router.get('/', (req, res) => {
  const connection = knex
  getSkillsDb.getSkills(connection)
    .then(skills => {
      res.json(skills)
    })
})

router.post('/', (req, res) => {

  const connection = knex
  saveSkillsDb.saveSkills(connection, req.body)
    .then(skills => {
      res.send(skills)
    })
    .catch(err => {
    })
})


module.exports = router
