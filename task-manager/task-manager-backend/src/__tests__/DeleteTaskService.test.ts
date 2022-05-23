import { deleteTaskService } from "../services/DeleteTaskService";
import { AppError } from "../utils/AppError";

describe("GetTaskService", () => {
  it("should delete task with the given id", async () => {
    await expect(deleteTaskService.execute("1")).resolves.toEqual({message: "true"});
  });
  it("should throw an error when the given id not matches any task id", async () => {
      await expect(deleteTaskService.execute("1asadw")).rejects.toBeInstanceOf(AppError);
  })
});
