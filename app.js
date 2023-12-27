const express = require("express");
const cors = require("cors");

const {userRoutes, blogRoutes} = require("./modules/index");

const app = express();
const port = 8888;

app.use(cors);
app.use(express.json());

console.log("inside app.js");

app.use(userRoutes,blogRoutes);


app.get("/", (req,res)=>{
    res.json("here");
})

console.log("inside 2 app.js");

app.listen(port , ()=>{
    console.log("Server is running on port: "+port);
});

