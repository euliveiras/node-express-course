import { Request, Response } from "express";
import asyncWrapper from "../middlewares/async";
import { updateTaskService } from "../services/UpdateTaskService";

export default asyncWrapper( async function updateTaskController(req: Request, res: Response){
    const { id } = req.params;
    const { taskName, isCompleted } = req.body;
    await updateTaskService.execute({id, isCompleted, taskName})
    res.status(200).json({ ok: true });
});