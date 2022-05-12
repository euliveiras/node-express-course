import { Request, Response, NextFunction } from "express";

type AsyncWrapperArgs = {
    (req: Request, re: Response, next: NextFunction): Promise<void>;
};

export default function asyncWrapper(fn: AsyncWrapperArgs){
    return async (req: Request, res: Response, next: NextFunction) => {
        try{
            await fn(req, res, next);
        }catch(err){
            next(err);
        };
    };
};