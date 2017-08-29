const path = require('path')
const express = require('express')
const passport = require('passport')
const LocalStrategy = require('passport-local')
const auth = require('./lib/auth')
const apiRoutes = require('./routes/api')
const resourcesRoute = require('./routes/resources')
const eventsRoute = require('./routes/events')
const server = express()

server.use(function(req, res, next) {
  if (process.env.NODE_ENV === 'production' && req.headers['x-forwarded-proto'] === 'http') {
    return res.redirect(['https://', req.get('Host'), req.url].join(''))
  }
  next()
})

server.use(express.static('public'))
server.use(passport.initialize())
server.use('/api/v1/', apiRoutes)
server.use('/api/v1/resources', resourcesRoute)
server.use('/api/v1/events', eventsRoute)
server.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = function(db) {
  server.set('db', db)
  passport.use(new LocalStrategy(auth.verify(db)))
  return server
}
