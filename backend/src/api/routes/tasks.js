const express = require('express');
const router = express.Router();

const { GetAllTasks, CreateTask, GetTaskById, UpdateTask, DeleteTask } = require('../controllers/tasks');


/** Create a tasks */
router.get('/create', CreateTask);

/** Get all tasks */
router.get('/', GetAllTasks);

router.get('/:id', GetTaskById);

router.get('/update/:id', UpdateTask);

router.get('/delete/:id', DeleteTask);

module.exports = router;