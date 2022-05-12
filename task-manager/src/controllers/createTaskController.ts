import { Request, Response } from "express"
import TasksRepository from "../repositories/TasksRepository";

export default async function createTaskController(req: Request, res: Response){
    const { taskName: name } = req.body;
    const taskRepo = new TasksRepository();
    const createdTask = await taskRepo.createTask({ name })
    res.json(createdTask)
};