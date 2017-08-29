exports.up = knex => knex.schema.createTable('events', table => {
  table.increments('id').primary()
  table.date('date')
  table.boolean('is_am')
  table.string('description')
  table.string('title')
  table.integer('user_id') // event host
});

exports.down = knex => knex.schema.dropTable('events')
