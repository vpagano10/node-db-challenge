const express = require('express');

const Projects = require('./projects-model');

const router = express.Router();

//  GET         >>>         Working
router.get('/', (req, res) => {
    Projects.getProjects()
    .then(projects => {
        res.status(200)
        .json(projects)
    })
    .catch(err => {
        console.log('Error getting projects GET', err)
        res.status(500)
        .json({ message: 'Error retrieving the projects' })
    })
});

//  GET         >>>         Working
router.get('/resources', (req, res) => {
    Projects.getResources()
    .then(resources => {
        res.status(200)
        .json(resources)
    })
    .catch(err => {
        console.log('Error getting resources GET', err)
        res.status(500)
        .json({ message: 'Error retrieving the resources' })
    })
});

//  GET         >>>         Working
router.get('/tasks', (req, res) => {
    Projects.getTasks()
        .then(tasks => {
            res.status(200)
                .json(tasks)
        })
        .catch(err => {
            console.log('Error getting tasks GET', err)
            res.status(500)
                .json({ message: 'Error retrieving the tasks' })
        })
});

// POST         >>>         Working
router.post('/', (req, res) => {
    const projectData = req.body;
    console.log(req.body);
    Projects.addProject(projectData)
        .then(project => {
            if (project) {
                res.status(201)
                    .json(project)
            } else {
                res.status(404)
                    .json({ message: 'Please provide required information' })
            }
        })
        .catch(err => {
            console.log('Error posting new project POST', err)
            res.status(500)
                .json({ message: 'Failed to add new project' })
        })
})

// POST         >>>         Working
router.post('/resources', (req, res) => {    
    const resourceData = req.body;

    Projects.addResource(resourceData)
        .then(resource => {
            if (resource) {
                res.status(201)
                    .json(resource)
            } else {
                res.status(404)
                    .json({ message: 'Please provide required information' })
            }
        })
        .catch(err => {
            console.log('Error posting new resource POST', err)
            res.status(500)
                .json({ message: 'Failed to add new resource' })
        })
})

// POST         >>>         Working
router.post('/tasks', (req, res) => {    
    const taskData = req.body;

    Projects.addTask(taskData)
        .then(task => {
            if (task) {
                res.status(201)
                    .json(task)
            } else {
                res.status(404)
                    .json({ message: 'Please provide required information' })
            }
        })
        .catch(err => {
            console.log('Error posting new task POST', err)
            res.status(500)
                .json({ message: 'Failed to add new task' })
        })
})

module.exports = router;