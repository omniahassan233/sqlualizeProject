import { Sequelize } from "sequelize";

export const connection = new Sequelize('Blog_App','root','root',{
    host: "localhost" ,
    dialect: 'mysql'
});

connection.sync();