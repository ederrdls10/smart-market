const {Model, DataTypes} = require('sequelize');
let db  = require('../database/db');

class produto extends Model{
    static init(sequelize){
        super.init({
            ean: DataTypes.STRING,
            nome: DataTypes.STRING,
            descricao: DataTypes.STRING,
        }, {
            sequelize
        })
    };
    
}


module.exports = produto;