import { Request, Response , NextFunction , RequestHandler} from 'express'


export const catchError = (handler: RequestHandler) => {
    return function(req: Request, res: Response, next: NextFunction) {
        return handler(req, res,next).catch(next)

    }
}