import { updateTaskService } from "../services/UpdateTaskService";

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
});
