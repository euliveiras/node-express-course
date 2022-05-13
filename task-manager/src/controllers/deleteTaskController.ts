import asyncWrapper from "../middlewares/async";
import { deleteTaskService } from "../services/DeleteTaskService";

export default asyncWrapper( async function deleteTaskController(req, res){
    const { id } = req.body;
    const deletedTask = await deleteTaskService.execute(id)
    res.json(deletedTask);
});