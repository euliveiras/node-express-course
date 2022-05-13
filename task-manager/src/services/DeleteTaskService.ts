import TasksRepository from "../repositories/TasksRepository";

class DeleteTaskService{
    constructor(private database: TasksRepository){
        this.database = database
    }
    async execute(id: string){
        return await this.database.deleteTask(id);
    }
};

export const deleteTaskService = new DeleteTaskService(new TasksRepository());