
exports.up = knex => knex.schema.createTable('locations', table => {
  table.increments('id').primary()
  table.string('facility')
  table.string('address')
  table.boolean('is_confirmed')
  table.integer('user_id')
});

exports.down = knex => knex.schema.dropTable('locations')
