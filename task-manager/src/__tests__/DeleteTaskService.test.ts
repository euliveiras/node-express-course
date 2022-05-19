import { deleteTaskService } from "../services/DeleteTaskService";

describe("GetTaskService", () => {
  it("should delete task with the given id", async () => {
    await expect(deleteTaskService.execute("id")).resolves.toEqual({message: "true"});
  });
});
