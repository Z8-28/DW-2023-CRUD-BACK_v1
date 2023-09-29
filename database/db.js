import {Sequelize} from 'sequelize'

const db = new Sequelize('crud_dw', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db