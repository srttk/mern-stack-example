import { Sequelize } from 'sequelize'


const db = new Sequelize('mysql://root:root@localhost:3306/learning', {
    logging: false
})

export default db;