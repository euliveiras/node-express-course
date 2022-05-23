import "reflect-metadata";
import "dotenv"
import express from "express";
import routes from "./routes";
import notFound from "./middlewares/notFound";
import errorHandler from "./middlewares/errorHandler";

const api = express();
api.use(express.json());
api.use(routes)
api.use(notFound)
api.use(errorHandler);

export default api;

// módulo para configurar os middlewares
