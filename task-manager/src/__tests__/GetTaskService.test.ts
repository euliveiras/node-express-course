import {getTasksService} from "../services/GetTaskService";

describe("GetTaskService", () => {
    it("should return task from a given task id", async () => {
        await expect(getTasksService.execute("123")).resolves.toBe({});
    })
})