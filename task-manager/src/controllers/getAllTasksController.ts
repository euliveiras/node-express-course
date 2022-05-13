import asyncWrapper from "../middlewares/async";
import { getAllTasksService } from "../services/GetAllTasksService";

export default asyncWrapper( async function getAllTasksController(req, res){
    const tasks = await getAllTasksService.execute();
    return res.status(200).json(tasks);
});
