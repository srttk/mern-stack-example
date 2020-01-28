import app from './app'
import db from './db'
import User from './models/User'
const { PORT = 4000 } = process.env;

(async() => {
    
    await db.authenticate();

    await db.sync();

    console.log('DB Connected')

    app.listen(PORT, () => {
    
        console.log(`Backend running at port ${PORT}`)
    })
})()
