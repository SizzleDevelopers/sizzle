exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('resources').del().then(function() {
    // Inserts seed entries
    return knex('resources').insert([
      {
        title: 'Ronald McDonald House',
        type: 'location',
        user_id: 1,
        event_id: null
      }, {
        title: 'Fresh veggies',
        type: 'ingredient',
        user_id: 2,
        event_id: null
      }, {
        title: 'Baker',
        type: 'skill',
        user_id: 3,
        event_id: null
      },{
        title: 'Butcher',
        type: 'skill',
        user_id: 4,
        event_id: null
      },{
        title: 'My kitchen ',
        type: 'location',
        user_id: 5,
        event_id: null
      },{
        title: '10 kg chicken breast',
        type: 'ingredient',
        user_id: 6,
        event_id: null
      }
    ]);
  });
};
