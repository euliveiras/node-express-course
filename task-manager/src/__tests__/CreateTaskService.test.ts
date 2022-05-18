import { tasks } from "../mocks/tasks";
import { createTaskService } from "../services/CreateTaskService";

jest.mock("../repositories/TasksRepository");
jest.mock("../config/typeorm");

describe("CreateTaskService", () => {
  it("should create a new task with the given task name", async () => {
    const taskName = "Sleep";
    await expect(createTaskService.execute(taskName)).resolves.toHaveProperty("taskName", taskName);
  });
});
