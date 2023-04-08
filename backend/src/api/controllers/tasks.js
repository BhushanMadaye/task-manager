
let tasks = [];
let counter = 1;

/** Create Task */
exports.CreateTask = async (req, res, next) => {
    tasks.push({ id: counter, name: `Task${counter++}` });
    res.send({ tasks });
}


/** Get all Task */
exports.GetAllTasks = async (req, res, next) => {
    const { id } = req.params;
    res.send({ tasks });
}

/** Create Task */
exports.GetTaskById = async (req, res, next) => {
    const { id } = req.params;
    const task = tasks.find(e => e.id === Number(id));
    res.send({ task });
}

/** Update Task */
exports.UpdateTask = async (req, res, next) => {
    const { id } = req.params;
    const updatedTask = tasks.map(e => e.id === Number(id) ? { id: e.id, name: `TaskUpdated${Math.random() * 10}`} : e );
    res.send({ updatedTask });
}

/** Delete Task */
exports.DeleteTask = async (req, res, next) => {
    const { id } = req.params;
    const taskIndex = tasks.findIndex(e => e.id === Number(id));
    tasks.splice(taskIndex, 1)
    res.send({ tasks });
}