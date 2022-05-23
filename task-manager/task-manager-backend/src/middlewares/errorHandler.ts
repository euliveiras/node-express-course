import { NextFunction, Request, Response } from "express";

export default function errorHandler(err: any, req: Request, res: Response, next: NextFunction){
    console.log(err.stack);
    res.status(400).send(err.message);
}