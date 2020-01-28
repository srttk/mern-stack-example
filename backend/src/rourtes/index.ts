import { Router } from 'express'
import { Login, Register } from '../controllers/user-controller'
import { catchError } from '../handlers/catch-error'

const routes = Router();


routes.post('/login', catchError(Login))

routes.post('/register',  catchError(Register))

export default routes;