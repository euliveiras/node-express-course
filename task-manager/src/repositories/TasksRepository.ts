import typeorm from "../../typeorm";
import { Repository } from "typeorm";
import Task from "../entity/Task";

type CreateTaskDTO = {
  name: string;
};

type UpdateTaskDTO = {
  id: string;
  taskName: string;
  isCompleted?: boolean;
}

export default class TasksRepository {
  userRepository: Repository<Task>;
  constructor() {
    this.userRepository = typeorm.getRepository(Task);
  }
  async createTask({ name: taskName }: CreateTaskDTO) {
    try {
      const taskCreated = this.userRepository.create({
        taskName,
        isCompleted: false,
      });
      await this.userRepository.save(taskCreated);
      return taskCreated;
    } catch (err) {
      console.error(err);
    }
  }

  async getAllTasks(): Promise<Task[] | undefined>{
      try{
          const tasks = await this.userRepository.find();
          return tasks;
      }catch(err){
          console.error(err);
      };
    }

    async updateTask({ id, taskName, isCompleted }: UpdateTaskDTO){
      try{
        const updatedTask = await this.userRepository.update(id, { taskName, isCompleted});
        return updatedTask;
      } catch(err){
        console.error(err);
      }
    }

    async deleteTask({ id }: {id: string}){
      try{
        const deletedTask = await this.userRepository.delete(id);
        return { message: "task deleted!"};
      } catch(err){
        console.error(err);
      }
    }

    async getTask({ id }: { id: string }){
      try{
        const findedTask = await this.userRepository.findBy({ id });
        return findedTask;
      }catch(err){
        throw new Error(err.message)
      }
    };
};
