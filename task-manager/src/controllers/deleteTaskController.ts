import asyncWrapper from "../middlewares/async";
import TasksRepository from "../repositories/TasksRepository";

export default asyncWrapper( async function deleteTaskController(req, res){
    const { id } = req.body;
    const taskRepo = new TasksRepository();
    const deletedTask = await taskRepo.deleteTask({ id });
    res.json(deletedTask);
});