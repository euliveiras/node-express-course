import TasksRepository, { ITasksRepository } from "../repositories/TasksRepository";
import { appError } from "../utils/AppError";

class CreateTaskService{
    constructor(private database: ITasksRepository){
        this.database = database
    }
    async execute(taskName: string){
        if(taskName == "") throw appError("Name must not be empty!", 400)
        return await this.database.createTask(taskName);
    }
};

export const createTaskService = new CreateTaskService(new TasksRepository());