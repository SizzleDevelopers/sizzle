
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('attendance').del()
    .then(function () {
      // Inserts seed entries
      return knex('attendance').insert([
        {id: 1, user_id: '', ingredient_id: '', skill_id: '', location_id: '', kg: '2kg' },
        {id: 2, user_id: '', ingredient_id: '', skill_id: '', location_id: '', kg: '2kg' },
        {id: 3, user_id: '', ingredient_id: '', skill_id: '', location_id: '', kg: '2kg' }
      ]);
    });
};
