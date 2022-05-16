import {jest} from '@jest/globals'
import Task from '../entities/Task';
import MockedTaskRepository from "../repositories/MockedTaskRepository";
import TasksRepository from "../repositories/TasksRepository";
import GetAllTasksService, {getAllTasksService} from "../services/GetAllTasksService";

jest.mock("../repositories/TasksRepository");

describe("GetTaskService", () => {
    it("should return all tasks", async () => {
        console.log(await getAllTasksService.execute())
        await expect(getAllTasksService.execute()).resolves.toEqual({})
    })
});
