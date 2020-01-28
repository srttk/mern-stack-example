import { HttpError } from './HttpError';


export class AuthenticationError extends HttpError {

    constructor(message = "Authentication Error" ) {
        super(message)
        this.statusCode = 401;
    }
}