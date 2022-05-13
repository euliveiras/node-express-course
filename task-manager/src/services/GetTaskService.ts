import TasksRepository from "../repositories/TasksRepository";
import { appError } from "../utils/AppError";

class GetTaskService{
    constructor(private database: TasksRepository){
        this.database = database
    }
    async execute(id: string){
        try{
            return await this.database.getTask(id);
        }catch{
            throw appError(`The given id(${id}) is invalid`, 404)
        }
    }
};

export const getTasksService = new GetTaskService(new TasksRepository());