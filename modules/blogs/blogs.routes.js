import express from "express"
import {getAllBlogs,addBlog} from "../blogs/controller/blogs.controller.js"

const router = express.Router();

router.get("/notes" , getAllBlogs)
router.post("/notes" , addBlog)

export default router;