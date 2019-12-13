
exports.up = function(knex) {
    return knex.schema.createTable('newProjects', tbl => {
        tbl.increments();
        tbl.string('name', 255)
            .unique()
            .notNullable();
        tbl.string('description', 255)
            .notNullable();
        tbl.boolean('completed')
            .notNullable()
            .defaultTo(false);
    })
    .createTable('newResources', tbl => {
        tbl.increments();
        tbl.string('name', 255)
            .unique()
            .notNullable();
        tbl.string('description', 255)
            .notNullable();
    })
    .createTable('newTasks', tbl => {
        tbl.increments();
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('newProjects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.string('description', 255)
            .notNullable();
        tbl.string('notes', 255);
        tbl.boolean('completed')
            .notNullable()
            .defaultTo(false);
    })
    .createTable('project_tasks', tbl => {
        tbl.primary(['project_id', 'task_id']);
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('newProjects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.integer('task_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('newTasks')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
    .createTable('project_resources', tbl => {
        tbl.primary(['project_id', 'resource_id']);
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('newProjects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('newResources')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('project_resources')
        .dropTableIfExists('project_tasks')
        .dropTableIfExists('newTasks')
        .dropTableIfExists('newResources')
        .dropTableIfExists('newProjects')
};

// a project can have multiple tasks.

// a task belongs to only one project.

// a project can use multiple resources.

// the same resource can be used in multiple projects.

// when adding projects the client must provide a name, the description is optional.

// when adding resources the client must provide a name, the description is optional.

// when adding a task the client must provide a description, the notes are optional.

// when adding a task the client must provide the id of an existing project.

// for projects and tasks if no value is provided for the completed property, the API should provide a default value of false.