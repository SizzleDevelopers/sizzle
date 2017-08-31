exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del().then(function() {
    // Inserts seed entries
    return knex('events').insert([
      {
        date: new Date(2017, 8, 27),
        is_am: true,
        description: 'Newtown School community get together',
        title: 'Newtown School Fair',
        user_id: 1
      }, {
        date: new Date(2017, 9, 2),
        is_am: false,
        description: 'Cancer society fundraiser',
        title: 'Fundraise for Cancer',
        user_id: 2
      }, {
        date: new Date(2017, 9, 8),
        is_am: true,
        description: 'Kaibosh fundraiser',
        title: 'Yet another fundraise',
        user_id: 3
      }, {
        date: new Date(2017, 10, 1),
        is_am: true,
        description: 'Get to know your neighbors at Karori Park fair',
        title: 'Neighborhood BBQ',
        user_id: 4
      }, {
        date: new Date(2017, 9, 28),
        is_am: true,
        description: "Let\'s help warm up the less fortunate",
        title: 'Soup for everyone',
        user_id: 5
      }
    ]);
  });
};
