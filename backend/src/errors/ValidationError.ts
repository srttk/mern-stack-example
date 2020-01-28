import { HttpError } from './HttpError';


export class ValidationError extends HttpError {

    constructor(message = "Validation Error" ) {
        super(message)
        this.statusCode = 422;
    }
}