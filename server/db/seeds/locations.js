
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {id: 1, facility: 'bakery', address: '221b Baker st', user_id: 1, is_confirmed: false},
        {id: 2, facility: 'fishmongery', address: 'Davy Jones locker', user_id: 2, is_confirmed: false},
        {id: 3, facility: 'jam shed', address: 'Strawberry field', user_id: 3, is_confirmed: false}
      ]);
    });
};
