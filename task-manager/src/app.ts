import "reflect-metadata";
import "../typeorm";
import express from "express";
import routes from "./routes";

const api = express();
api.use(express.json());
api.use(routes)

export default api;

// módulo para configurar os middlewares
