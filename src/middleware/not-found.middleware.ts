import { NextFunction, Request, Response } from 'express';

export const NotFoundHandler = (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    const message = 'Resource not found';
    response.status(404).send(message);
}