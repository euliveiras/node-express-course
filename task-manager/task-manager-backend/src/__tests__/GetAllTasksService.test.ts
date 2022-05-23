import { jest } from "@jest/globals";
import { getAllTasksService } from "../services/GetAllTasksService";
import { tasks } from "../mocks/tasks";

jest.mock("../repositories/TasksRepository");
jest.mock("../config/typeorm");

describe("GetTaskService", () => {
  it("should return all tasks", async () => {
    await expect(getAllTasksService.execute()).resolves.toEqual(tasks);
  });
});
