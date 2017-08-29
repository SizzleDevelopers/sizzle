
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('event_info').del()
    .then(function () {
      // Inserts seed entries
      return knex('event_info').insert([
        {id: 1, event_id: '', skill_id: '', ingredient_id: ''},
        {id: 2, event_id: '', skill_id: '', ingredient_id: ''},
        {id: 3, event_id: '', skill_id: '', ingredient_id: ''}
      ]);
    });
};
