import { Request, Response, NextFunction } from 'express'
import { HttpError } from '../errors'

export const ErrorHandler = (error: HttpError, req: Request, res: Response, next: NextFunction) => {

    res.status(error.statusCode || 500 ).json({message: error.message || "Internal server error"})

}

