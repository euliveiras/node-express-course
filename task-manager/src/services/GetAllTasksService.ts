import TasksRepository from "../repositories/TasksRepository";

export default class GetAllTasksService{
    constructor(private database: TasksRepository){
        this.database = database
    }
    async execute(){
        return await this.database.getAllTasks();
    }
};

export const getAllTasksService = new GetAllTasksService(new TasksRepository());