import { userModel } from "../../../database/models/user.js";


export const addUser = async(req,res) => {
    let {name,email, password} = req.body;
    let user = await userModel.create({name,email, password});
    res,json({message:"done", user})
}

// export const addUser = async(req,res)=>{

//     console.log("in signUp function");

//     const{email,name,password,cPassword} = req.body;
    
//     if(password === cPassword){

//         let foundedUser = await userModel.findAll({
//             where: {
//                 email: email
//             }
//         });
//         console.log(foundedUser);
        
//         if(foundedUser.length){
//             res.json({message:"user already exists"})
//         }else{
//             let added = await userModel.create({email,name,password});
//             res.json({message:"added", added})
//         }

//     }else{
//         res.json({message:"password does not match confirmed password :("})
//     }



// }


export const getAllUsers = async (req,res) => {
    console.log("in getAllUsers function");

    let data = await userModel.findAll();

    res.json({message: "data", data})
}

export const deleteUser = async (req,res) =>{
    let {id} = req.body;
    let deletedUser = await userModel.destroy({
        where:{
            id
        }
    })

    res.json({message:"done",deletedUser})
}

export const updateUser = async(rq,res) =>{
    let {id,name} = req.body;
    let users = await userModel.update(
        {
            name
        },
        {
            where: {
            
                id
        
            }
        }
    )

    users[0] ? res.json({message:"done",users}) : res.json({message:"not found",users})
}

