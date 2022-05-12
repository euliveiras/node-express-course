import { Request, Response } from "express"
import asyncWrapper from "../middlewares/async";
import TasksRepository from "../repositories/TasksRepository";

export default asyncWrapper( async function createTaskController(req, res){
    const { taskName: name } = req.body;
    if(name == "") throw new Error("Name in the body request is empty!")
    const taskRepo = new TasksRepository();
    const createdTask = await taskRepo.createTask({ name })
    res.json(createdTask)
});