const express = require("express");
const cors = require("cors");

const {userRoutes, blogRoutes} = require("./modules/index");
const connectToDB = require("./database/connection")

const app = express();
const port = 3030;

app.use(cors);
app.use(express.json());

console.log("inside app.js");

app.use(userRoutes,blogRoutes);

app.get("/", (req,res)=>{
    res.json("here");
})


connectToDB();

app.listen(port , ()=>{
    console.log("Server is running on port: "+port);
});

