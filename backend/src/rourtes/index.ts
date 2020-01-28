import { Router } from 'express'
import { Login, Register, Index} from '../controllers/user-controller'
import { catchError } from '../handlers/catch-error'
import { onlyAuth } from '../middlewares/guards'

const routes = Router();


routes.post('/login', catchError(Login))

routes.post('/register',  catchError(Register))

/**
 * User list 
 */
routes.get('/users', onlyAuth ,catchError(Index))

export default routes;