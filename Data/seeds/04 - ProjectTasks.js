
exports.seed = function(knex) {
  return knex('project_tasks')
    .truncate()
    .then(function () {
      return knex('project_tasks').insert([
        {project_id: 1, task_id: 1},
        {project_id: 1, task_id: 2},
        {project_id: 1, task_id: 3}
      ]);
    });
};
