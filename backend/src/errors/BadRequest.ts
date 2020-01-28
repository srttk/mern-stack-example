import { HttpError } from './HttpError';


export class BadRequestError extends HttpError {

    constructor(message = "Bad request" ) {
        super(message)
        this.statusCode = 400;
    }
}