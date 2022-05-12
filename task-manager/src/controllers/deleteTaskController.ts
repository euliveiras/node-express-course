import { Request, Response } from "express";
import TasksRepository from "../repositories/TasksRepository";

export default async function deleteTaskController(req: Request, res: Response){
    const { id } = req.body;
    const taskRepo = new TasksRepository();
    const deletedTask = await taskRepo.deleteTask({ id });
    res.json(deletedTask);
}