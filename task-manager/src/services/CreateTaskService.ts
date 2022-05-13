import TasksRepository, { ITasksRepository } from "../repositories/TasksRepository";

class CreateTaskService{
    constructor(private database: ITasksRepository){
        this.database = database
    }
    async execute(taskName: string){
        return await this.database.createTask(taskName);
    }
};

export const createTaskService = new CreateTaskService(new TasksRepository());