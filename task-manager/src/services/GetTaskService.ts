import TasksRepository from "../repositories/TasksRepository";

class GetTaskService{
    constructor(private database: TasksRepository){
        this.database = database
    }
    async execute(id: string){
        return await this.database.getTask(id);
    }
};

export const getTasksService = new GetTaskService(new TasksRepository());