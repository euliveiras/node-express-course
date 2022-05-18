import { getTasksService } from "../services/GetTaskService";
import { tasks } from "../mocks/tasks";
import { AppError, appError } from "../utils/AppError";

describe("GetTaskService", () => {
  it("should return task from a given task id", async () => {
    const taskId = tasks[0].id;
    const task = tasks[0];
    await expect(getTasksService.execute(taskId)).resolves.toEqual([{
      ...task,
    }]);
  });
  it("should reject when the given id not matches any taskid", async () => {
    await expect(getTasksService.execute("12313123")).rejects.toBeInstanceOf(AppError)
  });
});
