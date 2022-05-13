import asyncWrapper from "../middlewares/async";
import { getTasksService } from "../services/GetTaskService";

export default asyncWrapper(async function getTaskController(req, res){
    const { id } = req.params
    const findedTask = await getTasksService.execute(id);
    res.status(200).json(findedTask)
});