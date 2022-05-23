import { Request, Response, NextFunction } from "express";

type AsyncWrapperArgs = {
    (req: Request, res: Response, next: NextFunction): Promise<any>;
};

export default function asyncWrapper(fn: AsyncWrapperArgs){
    return async (req: Request, res: Response, next: NextFunction) => {
        try{
            await fn(req, res, next);
        }catch(err){
            next(err)
        };
    };
};