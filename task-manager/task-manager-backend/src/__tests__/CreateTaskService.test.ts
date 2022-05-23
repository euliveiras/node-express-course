import { tasks } from "../mocks/tasks";
import { createTaskService } from "../services/CreateTaskService";
import { appError } from "../utils/AppError";

jest.mock("../repositories/TasksRepository");
jest.mock("../config/typeorm");

describe("CreateTaskService", () => {
  it("should create a new task with the given task name", async () => {
    const taskName = "Sleep";
    await expect(createTaskService.execute(taskName)).resolves.toHaveProperty("taskName", taskName);
  });
  it("should throw error when the task name is a empty string", async () => {
    await expect(createTaskService.execute("")).rejects.toThrow(appError("Name must not be empty!", 400));
  });
});
