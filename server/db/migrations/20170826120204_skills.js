
exports.up = knex => knex.schema.createTable('skills', table => {
  table.increments('id').primary()
  table.string('skill')
})

exports.down = knex => knex.schema.dropTable('skills')
