import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import { AuthenticationError} from '../errors'
import config from '../config'
import { catchError }  from '../handlers/catch-error'

export const onlyAuth = catchError(async (req: Request, res: Response, next: NextFunction) => {

    const authHeader = req.headers['authorization'] || null;

    if(!authHeader) throw new AuthenticationError('Authorization header not found')

    const token = authHeader.split(" ")[1] || ""

    if(!token) throw new AuthenticationError('Token not found')

    try {
        const decoded  = await verify(token, config.appSecret);
    }

    catch(e) {
        throw new AuthenticationError('Malformed token')
    }

    next();

})