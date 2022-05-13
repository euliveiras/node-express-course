import asyncWrapper from "../middlewares/async";
import { createTaskService } from "../services/CreateTaskService";

export default asyncWrapper( async function createTaskController(req, res){
    const {taskName}: { taskName: string} = req.body;
    if(taskName == "") throw new Error("Name in the body request is empty!")
    const createdTask = await createTaskService.execute(taskName);
    res.json(createdTask)
});