import { Request, Response } from "express";
import asyncWrapper from "../middlewares/async";
import TasksRepository from "../repositories/TasksRepository";

export default asyncWrapper( async function updateTaskController(req: Request, res: Response){
    const { id } = req.params;
    const { taskName, isCompleted } = req.body;
    const taskRepo = new TasksRepository();
    await taskRepo.updateTask({ id, taskName, isCompleted})
    res.status(200).json({ ok: true });
});