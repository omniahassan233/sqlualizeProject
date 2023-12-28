import { DataTypes } from "sequelize";
import { connection } from "../connection.js";


 const blogModel = connection.define('blog',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title:{
        type: DataTypes.STRING(100),
        required: true,
        allowNull: false
    },
    description:{
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
        unique: true
    },
    user_id:{
        type: DataTypes.INTEGER
    }
});

export default blogModel;
