
exports.seed = function(knex) {
  return knex('newestProjects')
    .truncate()
    .then(function () {
      return knex('newestProjects').insert([
        {id: 1, name: 'todays sprint', description: 'lets get that 3 star', completed: false},
        {id: 2, name: 'personal website', description: 'simple yet gets the job done', completed: false},
        {id: 3, name: 'react redux app', description: 'this is gonna be annoying', completed: false}
      ]);
    });
};
