import {  Repository } from "typeorm";
import { v4 as uuid } from "uuid";
import Task from "../entities/Task";
import { tasks } from "../mocks/tasks";
import { appError } from "../utils/AppError";
import { ITasksRepository } from "./TasksRepository";

export default class MockedTasksRepository implements ITasksRepository{
    readonly userRepository: Repository<Task>;
    public tasks = [...tasks]
    async getTask(id: string){
        const findedTask = tasks.find((task) => task.id === id)
        if(!findedTask) throw appError("asd", 404)
        return [findedTask];
    }
    async getAllTasks() {
        return tasks;
    }
    async createTask(taskName: string){
        const taskCreated = {
            taskName,
            isCompleted: false,
            id: uuid()
        } as Task
        return taskCreated;
    }
    async deleteTask(id: string){
        return {message: "true"}
    }
    async updateTask({ id, taskName, isCompleted }: { id: string; taskName: string; isCompleted?: boolean | undefined; }){
        const updateTask = [] as any
        return updateTask
    }
    
};