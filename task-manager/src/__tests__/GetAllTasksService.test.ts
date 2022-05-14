import {jest} from '@jest/globals'
import Task from '../entities/Task';
import MockedTaskRepository from "../repositories/MockedTaskRepository";
import TasksRepository from "../repositories/TasksRepository";
import GetAllTasksService, {getAllTasksService} from "../services/GetAllTasksService";

jest.mock("../repositories/TasksRepository");

const mockedTasksRepository = TasksRepository as jest.Mock<TasksRepository>;

mockedTasksRepository.mockImplementation(() => {
    return new MockedTaskRepository()
})

describe("GetTaskService", () => {
    it("should return all tasks", async () => {
        const getAllTasksService = new GetAllTasksService(mockedTasksRepository())
        await expect(getAllTasksService.execute()).resolves.toEqual({})
    })
});
