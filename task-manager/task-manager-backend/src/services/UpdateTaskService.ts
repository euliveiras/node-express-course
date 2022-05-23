import MockedTasksRepository from "../repositories/MockedTaskRepository";
import TasksRepository from "../repositories/TasksRepository";
import { appError } from "../utils/AppError";

class UpdateTaskService{
    constructor(private database: TasksRepository){
        this.database = database
    }
    async execute({ id, taskName, isCompleted}: { id: string, taskName: string, isCompleted: boolean}){
        try {
            return await this.database.updateTask({id, taskName, isCompleted});
        } catch{
            throw appError(`The given id(${id}) is invalid`, 404)
        }
    }
};

export const updateTaskService = process.env.ENVIRONMENT === "TEST" 
    ? new UpdateTaskService(new MockedTasksRepository())
    : new UpdateTaskService(new TasksRepository());