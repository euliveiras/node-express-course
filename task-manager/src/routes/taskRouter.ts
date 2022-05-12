import { Router } from "express";
import createTaskController from "../controllers/createTaskController";
import deleteTaskController from "../controllers/deleteTaskController";
import getAllTasksController from "../controllers/getAllTasksController";
import getTaskController from "../controllers/getTaskController";
import updateTaskController from "../controllers/updateTaskController";

const taskRouter = Router();

taskRouter.route("/")
    .get(getAllTasksController)
    .post(createTaskController)
    .delete(deleteTaskController)

taskRouter.route("/:id")
    .put(updateTaskController)
    .get(getTaskController)
;


export default taskRouter;
