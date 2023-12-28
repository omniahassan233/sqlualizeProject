import blogModel from "../../../database/models/blog.js";

export const getAllBlogs = async(req,res)=>{
   let blogs =  await blogModel.findAll();
   res.json({message:"Done",blogs})
}

export const addBlog = async(req,res)=>{
    let {title,description,user_id} = req.body;
    let addedBlog = await blogModel.create({title,description,user_id});
    res.json({message:"done",addedBlog})
}