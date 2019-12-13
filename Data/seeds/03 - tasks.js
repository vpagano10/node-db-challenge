
exports.seed = function(knex) {
  return knex('tasks')
    .truncate()
    .then(function () {
      return knex('tasks').insert([
        {id: 1, description: 'create react-app my-app', notes: '', completed: false},
        {id: 2, description: 'download dependencies', notes: '', completed: false},
        {id: 3, description: 'deploy the project', notes: '', completed: false}
      ]);
    });
};
