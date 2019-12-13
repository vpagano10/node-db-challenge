const db = require('../Data/db-config');

module.exports = {
    getProjects,
    getResources,
    getTasks,
    addProject,
    addResource,
    addTask,
    findByPId,
    findByRId,
    findByTId
};

// ✔
function getProjects() {
    return db('projects')
};

// ✔
function getResources() {
    return db('resources')
};

// ✔
function getTasks() {
    return db('tasks')
};


// 
function addProject(project) {
    return db('projects')
    .insert(project, 'id')
    .then(ids => {
        const [id] = ids
        return findByPId(id)
    })
};

// 
function addResource(resource) {
    return db('resources')
    .insert(resource, 'id')
    // .then(ids => {
    //     const [id] = ids
    //     return findByRId(id)
    // })
};

// 
function addTask(task) {
    return db('tasks')
    .insert(task, 'id')
    .then(ids => {
        const [id] = ids
        return findByTId(id)
    })
};

// 
function findByPId(id) {
    return db('projects')
        .where({ id })
        .first()
};

// 
function findByRId(id) {
    return db('resources')
        .where({ id })
        .first()
};

// 
function findByTId(id) {
    return db('tasks')
        .where({ id })
        .first()
};