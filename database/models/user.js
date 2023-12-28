import {DataTypes} from "sequelize";
import {connection} from "../connection.js"


export const userModel = connection.define('user',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING(100),
        required: true,
        allowNull: false,
        unique: true
    },
    email:{
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
        unique: true
    },
    password:{
        type: DataTypes.STRING,
        required: true
    }
});
