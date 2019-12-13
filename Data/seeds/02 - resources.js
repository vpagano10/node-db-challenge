
exports.seed = function(knex) {
  return knex('resources')
    .truncate()
    .then(function () {
      return knex('resources').insert([
        {id: 1, name: 'google', description: 'pretty much find anything here'},
        {id: 2, name: 'stack overflow', description: 'has a lot of useful information from other developers'},
        {id: 3, name: 'old lectures', description: 'a great resource on the Lambda site for students'}
      ]);
    });
};
