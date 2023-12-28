import cors from "cors";
import express from "express";
import blogRoutes from "./modules/blogs/blogs.routes.js";
import userRoutes from "./modules/users/users.routes.js";

const app = express();
const port = 8080;

app.use(cors);
app.use(express.json());

app.use(userRoutes,blogRoutes)

app.listen(port , ()=>{
    console.log("Server is running on port: "+port);
});
