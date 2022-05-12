import { Request, Response } from "express";

export default function notFound(req: Request, res: Response){
    res.send("This page doesn't exist");
};