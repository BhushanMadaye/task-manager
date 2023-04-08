const express = require('express');
const router = express.Router();

const taskRouter = require('./tasks');

router.use('/task', taskRouter);

module.exports = router;