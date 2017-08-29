
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('skills').del()
    .then(function () {
      // Inserts seed entries
      return knex('skills').insert([
        {id: 1, skill: 'food creator'},
        {id: 2, skill: 'butcher'},
        {id: 3, skill: 'baker'}
      ]);
    });
};
