import "reflect-metadata";
import "dotenv";
import cors from "cors";
import express from "express";
import routes from "./routes";
import notFound from "./middlewares/notFound";
import errorHandler from "./middlewares/errorHandler";

const api = express();
api.use(cors());
api.use(express.json());
api.use(routes)
api.use(notFound)
api.use(errorHandler);

export default api;

// módulo para configurar os middlewares
