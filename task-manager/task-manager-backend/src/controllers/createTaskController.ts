import asyncWrapper from "../middlewares/async";
import { createTaskService } from "../services/CreateTaskService";

export default asyncWrapper( async function createTaskController(req, res){
    const {taskName}: { taskName: string} = req.body;
    const createdTask = await createTaskService.execute(taskName);
    res.json(createdTask)
});