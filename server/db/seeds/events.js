exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del().then(function() {
    // Inserts seed entries
    return knex('events').insert([
      {
        id: 1,
        date: new Date(2017, 8, 27),
        is_am: true,
        description: 'Newtown School community get together',
        title: 'Newtown School Fair',
        user_id: 1
      }, {
        id: 2,
        date: new Date(2017, 9, 2),
        is_am: false,
        description: 'cancer society fundraiser',
        title: 'Fundraise for Cancer',
        user_id: 2
      }, {
        id: 3,
        date: new Date(2017, 9, 8),
        is_am: true,
        description: 'kaibosh fundraiser',
        title: 'Yet another fundraise',
        user_id: 3
      }
    ]);
  });
};
