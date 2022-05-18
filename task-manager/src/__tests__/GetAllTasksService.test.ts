import {jest} from '@jest/globals'
import {getAllTasksService} from "../services/GetAllTasksService";

jest.mock("../repositories/TasksRepository");
jest.mock("../config/typeorm");

describe("GetTaskService", () => {
    it("should return all tasks", async () => {
        console.log(await getAllTasksService.execute())
        await expect(getAllTasksService.execute()).resolves.toEqual({})
    })
});
