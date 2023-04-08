const express = require('express');
const router = require('./api/routes/index');

const PORT = 3000;

const app = express();
app.use(express.json());

const tasks = [];
let counter = 1;

/** Routes middleware */
app.use(router);

// /** Create a new task */
// app.get('/task/create', (req, res) => {
//     tasks.push({ id: counter, name: `Task${counter++}` });
//     res.send({ tasks });
// });

// /** Get a task */
// app.get('/task/read/:id', (req, res) => {
//     const { id } = req.params;
//     console.log(id);
//     const task = tasks.find(e => e.id === Number(id));
//     res.send({ task });
// });

// /** Update a task */
// app.get('/task/update/:id', (req, res) => {
//     const { id } = req.params;
//     const updatedTask = tasks.map(e => e.id === Number(id) ? { id: e.id, name: `TaskUpdated${Math.random() * 10}`} : e );
//     res.send({ updatedTask });
// });

// /** Delete a task */
// app.get('/task/delete/:id', (req, res) => {
//     const { id } = req.params;
//     const taskIndex = tasks.findIndex(e => e.id === Number(id));
//     tasks.splice(taskIndex, 1)
//     res.send({ tasks });
// });

app.listen(PORT, () => {
    console.log(`Localhost listening to server: ${PORT}`);
})