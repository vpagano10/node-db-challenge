
exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
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
    .createTable('resources', tbl => {
        tbl.increments();
        tbl.string('name', 255)
            .unique()
            .notNullable();
        tbl.string('description', 255)
            .notNullable();
    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.string('description', 255)
            .notNullable();
        tbl.string('notes', 255);
        tbl.boolean('completed')
            .notNullable()
            .defaultTo(false);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
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