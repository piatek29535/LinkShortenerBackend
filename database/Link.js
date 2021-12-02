const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('./database');

class Link extends Model {}

Link.init({
    id:{
        type:DataTypes.STRING,
        allowNull:false,
        primaryKey:true
    },
    shortURL:{
        type:DataTypes.STRING,
        allowNull:false
    },
    destination:{
        type:DataTypes.STRING,
        allowNull:false
    },
    createdAt:{
        type:DataTypes.STRING,
        allowNull:false
    },
},{
    sequelize,
    modelName:'Link'
})

module.exports = Link