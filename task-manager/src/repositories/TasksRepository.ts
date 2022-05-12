import typeorm from "../../typeorm";
import { Repository } from "typeorm";
import Task from "../entities/Task";

type CreateTaskDTO = {
  name: string;
};

type UpdateTaskDTO = {
  id: string;
  taskName: string;
  isCompleted?: boolean;
};

export default class TasksRepository {
  userRepository: Repository<Task>;
  constructor() {
    this.userRepository = typeorm.getRepository(Task);
  }
  async createTask({ name: taskName }: CreateTaskDTO) {
      const taskCreated = this.userRepository.create({
        taskName,
        isCompleted: false,
      });
      await this.userRepository.save(taskCreated);
      return taskCreated;
  }

  async getAllTasks(): Promise<Task[] | undefined> {
      const tasks = await this.userRepository.find();
      return tasks;
  }

  async updateTask({ id, taskName, isCompleted }: UpdateTaskDTO) {
      const updatedTask = await this.userRepository.update(id, {
        taskName,
        isCompleted,
      });
      return updatedTask;
  }

  async deleteTask({ id }: { id: string }) {
      const deletedTask = await this.userRepository.delete(id);
      return { message: "task deleted!" };
  };

  async getTask({ id }: { id: string }) {
      const findedTask = await this.userRepository.findBy({ id });
      return findedTask;
  }
}
