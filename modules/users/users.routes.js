import express from "express"; 
import { addUser, getAllUsers ,deleteUser,updateUser} from "./controllers/user.controller.js";

const router = express.Router();

router.get("/" , (req,res)=>{
    res.json({message: "hello from Blog app"})
})

router.post("/addUser",addUser)

router.get("/user",getAllUsers)

router.delete("/user",deleteUser)

router.put("/user",updateUser)

export default router;