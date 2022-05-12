import { Request, Response } from "express";
import TasksRepository from "../repositories/TasksRepository";

export default async function updateTaskController(req: Request, res: Response){
    const { id } = req.params;
    const { taskName, isCompleted } = req.body;
    console.log(id)
    const taskRepo = new TasksRepository();
    await taskRepo.updateTask({ id, taskName, isCompleted})
    res.status(200).json({ ok: true });
}