import { Router } from "express";
import taskRouter from "./taskRouter"
const routes = Router();

routes.use("/api/v1/tasks", taskRouter);
export default routes;

// módulo para configurar as rotas 