exports.up = knex => knex.schema.createTable('users', table => {
  table.increments('id').primary()
  table.string('name')
  table.string('username')
  table.binary('hash')
  table.string('email')
  table.string('phone-number')
})

exports.down = knex => knex.schema.dropTable('users')
