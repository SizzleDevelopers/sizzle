
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient: 'tomato'},
        {id: 2, ingredient: 'chicken'},
        {id: 3, ingredient: 'cheese'}
      ]);
    });
};
