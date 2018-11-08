
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('jobs').del()
    .then(function () {
      // Inserts seed entries
      return knex('jobs').insert([
        {id: 1, title: 'Paint Fence', description: 'I need someone to paint my fence because I am old and lazy and have no paint', employer: 'Ollie', date_info: 'Sometime next week'},
        {id: 2, title: 'Paint Fence', description: 'I need someone to paint my fence because I am old and lazy and have no paint', employer: 'Ollie', date_info: 'Sometime next week'},
        {id: 3, title: 'Paint Fence', description: 'I need someone to paint my fence because I am old and lazy and have no paint', employer: 'Ollie', date_info: 'Sometime next week'}
      ]);
    });
};
