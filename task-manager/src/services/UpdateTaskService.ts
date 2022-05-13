import TasksRepository from "../repositories/TasksRepository";

class UpdateTaskService{
    constructor(private database: TasksRepository){
        this.database = database
    }
    async execute({ id, taskName, isCompleted}: { id: string, taskName: string, isCompleted: boolean}){
        return await this.database.updateTask({id, taskName, isCompleted});
    }
};

export const updateTaskService = new UpdateTaskService(new TasksRepository());