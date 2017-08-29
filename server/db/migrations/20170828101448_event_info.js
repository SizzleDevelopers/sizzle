exports.up = knex => knex.schema.createTable('event_info', table => {
  table.increments('id').primary()
  table.integer('event_id')
  table.integer('skill_id')
  table.integer('ingredient_id')


});

exports.down = knex => knex.schema.dropTable('event_info')
