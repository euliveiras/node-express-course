class AppError extends Error{
    constructor(message: string, public statusCode: number){
        super(message)
    }

};

export const appError = (message: string, statusCode: number) => new AppError(message, statusCode);