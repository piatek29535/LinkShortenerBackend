const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('./database');

class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true
    },
    firstName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    lastName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    joinDate:{
        type: DataTypes.DATE,
        allowNull:false
    },
    linkId:{
        type: DataTypes.STRING,
        allowNull:false,
    }
},{
    sequelize,
    modelName:"User"
})

module.exports = User