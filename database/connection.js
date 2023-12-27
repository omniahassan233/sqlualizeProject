const {Sequelize} = require("sequelize");

const sequelize = new Sequelize('Blog_App','root','root',{
    host: "localhost" ,
    dialect: 'mysql'
});


const connectToDB = () =>{
    //sync to automatically update schema structure with tables and columns
    //alter:true ---> to have the ability to change tables structure
    return sequelize.sync({alter:true}).then(() =>{
        console.log("DB connected successfully ^^");
    }).catch((err)=>{
        console.log("DB did not connect , error happened",err);
    }); 
};

module.exports = connectToDB;