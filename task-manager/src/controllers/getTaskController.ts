import { Request, Response } from "express";
import TasksRepository from "../repositories/TasksRepository";

export default async function getTaskController(req: Request, res: Response){
    const { id } = req.params;
    const taskRepo = new TasksRepository();
    const findedTask = await taskRepo.getTask({ id })
    res.json(findedTask)
}