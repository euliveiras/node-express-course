import { updateTaskService } from "../services/UpdateTaskService";
import { AppError } from "../utils/AppError";

describe("GetTaskService", () => {
  it("should update the task with the given parameters", async () => {
    const id = "some-id";
    const taskName = "making tests"
    const isCompleted = true;
    await expect(updateTaskService.execute({id, taskName, isCompleted})).resolves.toEqual({
      id, 
      taskName,
      isCompleted
    });
  });
  it("should throw an error when the id is invalid", async () => {
    const id = "";
    const taskName = "";
    const isCompleted = true;
    await expect(updateTaskService.execute({ id, taskName, isCompleted})).rejects.toBeInstanceOf(AppError);
  });
});
