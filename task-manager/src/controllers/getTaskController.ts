import { Request, Response } from "express";
import TasksRepository from "../repositories/TasksRepository";
import asyncWrapper from "../middlewares/async";

export default asyncWrapper(async function getTaskController(req, res){
    const { id } = req.params;
    const taskRepo = new TasksRepository();
    const findedTask = await taskRepo.getTask({ id })
    res.json(findedTask)
});