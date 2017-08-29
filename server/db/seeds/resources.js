exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('resources').del().then(function() {
    // Inserts seed entries
    return knex('resources').insert([
      {
        id: 1,
        title: 'rowboat',
        type: 'location',
        user_id: 1,
        event_id: null
      }, {
        id: 2,
        title: 'rowboat',
        type: 'ingredient',
        user_id: 2,
        event_id: null
      }, {
        id: 3,
        title: 'rowboat',
        type: 'skill',
        user_id: 3,
        event_id: null
      }
    ]);
  });
};
