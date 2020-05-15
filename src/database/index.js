const sequelize = require ('sequelize')
const User = require('../Models/User')
const dbConfig = require ('../config/database')

const connection = new sequelize(dbConfig)

User.init(connection)

try{
    connection.authenticate()
    console.log('Connection has been established successfully')
}catch(error){
    console.error('Unable to connect to the database ', error)
}
module.exports = connection