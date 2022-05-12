import asyncWrapper from "../middlewares/async";
import TasksRepository from "../repositories/TasksRepository";

export default asyncWrapper( async function getAllTasksController(req, res){
    const tasksRepo = new TasksRepository();
    const tasks = await tasksRepo.getAllTasks();
    return res.json(tasks);
});
