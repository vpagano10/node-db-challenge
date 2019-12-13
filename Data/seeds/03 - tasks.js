
exports.seed = function(knex) {
  return knex('newestTasks')
    .truncate()
    .then(function () {
      return knex('newestTasks').insert([
        {id: 1, project_id: 1, description: 'create react-app my-app', notes: 'note1', completed: false},
        {id: 2, project_id: 1, description: 'download dependencies', notes: 'note2', completed: false},
        {id: 3, project_id: 1, description: 'deploy the project', notes: 'note3', completed: false}
      ]);
    });
};
