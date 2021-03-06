import MockedTasksRepository from "../repositories/MockedTaskRepository";
import TasksRepository from "../repositories/TasksRepository";
import { appError } from "../utils/AppError";

class DeleteTaskService{
    constructor(private database: TasksRepository){
        this.database = database
    }
    async execute(id: string){
        try {
            return await this.database.deleteTask(id);
        } catch{
            throw appError(`The given id(${id}) is invalid`, 404)
        }
    }
};

export const deleteTaskService = process.env.ENVIRONMENT === "TEST" 
    ? new DeleteTaskService(new MockedTasksRepository())
    : new DeleteTaskService(new TasksRepository());