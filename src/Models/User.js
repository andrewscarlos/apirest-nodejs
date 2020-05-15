const {Model, DataTypes} = require('sequelize')

class Users extends Model{
    static init(sequelize){
        super.init({
            name:DataTypes.STRING,
            sobrenome:DataTypes.STRING,
            idade:DataTypes.INTEGER,
            peso:DataTypes.FLOAT,
            altura:DataTypes.FLOAT,
        },{
            sequelize
        })
    }
}

module.exports = Users