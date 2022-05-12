import { Request, Response } from "express"
import TasksRepository from "../repositories/TasksRepository";

export default async function getAllTasksController(req: Request, res: Response){
    const tasksRepo = new TasksRepository();
    const tasks = await tasksRepo.getAllTasks();
    return res.json(tasks);
};
