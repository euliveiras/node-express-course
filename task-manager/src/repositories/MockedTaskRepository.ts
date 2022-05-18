import {  Repository } from "typeorm";
import Task from "../entities/Task";
import { tasks } from "../mocks/tasks";
import { ITasksRepository } from "./TasksRepository";

export default class MockedTasksRepository implements ITasksRepository{
    readonly userRepository: Repository<Task>;
    async getTask(id: string){
        return [new Task()]
    }
    async getAllTasks() {
        return tasks;
    }
    async createTask(taskName: string){
        const taskCreated = this.userRepository.create({ taskName, isCompleted: false})
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