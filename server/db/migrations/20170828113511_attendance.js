exports.up = knex => knex.schema.createTable('attendance', table => {
  table.increments('id').primary()
  table.integer('user_id')
  table.integer('ingredient_id')
  table.integer('skill_id')
  table.integer('location_id')
  table.integer('kg')
});

exports.down = knex => knex.schema.dropTable('attendance')
