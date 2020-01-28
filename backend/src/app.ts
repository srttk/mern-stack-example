import  express, { Application }  from 'express';
import cors from 'cors'
import { ErrorHandler } from './middlewares/error-handling'
import { Index } from './controllers/home-controller'
import routes from './rourtes'

const app: Application = express();

app.use(express.json())
app.use(cors())

/**
 * Home route
 */
app.get('/', Index)

/**
 * API Routes
 */

 app.use('/api', routes)

 
 app.use(ErrorHandler)




export default app;