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
    return db('newestProjects')
};

// ✔
function getResources() {
    return db('newestResources')
};

// ✔
function getTasks() {
    return db('newestTasks')
};

// ✔
function addProject(project) {
    return db('newestProjects')
    .insert(project, 'id')
    .then(ids => {
        const [id] = ids
        return findByPId(id)
    })
};

// ✔
function addResource(resource) {
    return db('newestResources')
    .insert(resource, 'id')
    .then(ids => {
        const [id] = ids
        return findByRId(id)
    })
};

// ✔
function addTask(task) {
    return db('newestTasks')
    .insert(task, 'id')
    .then(ids => {
        const [id] = ids
        return findByTId(id)
    })
};

// ✔
function findByPId(id) {
    return db('newestProjects')
        .where({ id })
        .first()
};

// ✔
function findByRId(id) {
    return db('newestResources')
        .where({ id })
        .first()
};

// ✔
function findByTId(id) {
    return db('newestTasks')
        .where({ id })
        .first()
};