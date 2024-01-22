import userSchema from "../models/model.js";


export const signupController = async (req,res)=>{
   try{
    const {userName, userEmail, userPassword} = req.body;
    console.log("1")
    if (!userEmail ||!userName ||!userPassword){
        return res.status(400).json({
            status:false,
            message:"Please fill all the fields"
        })
    };
    console.log("2")
    if (password.length < 8) {
        return res.status(400).json({
        status: false,
        message: "Password length should be minimum 8 characters"
    })
    };
    console.log("3")
    const user = {
        userName,
        userEmail,
        userPassword
    }
    console.log("4")
    const userSchemaCheck = new userSchema(user)
    const usersSave = await userSchemaCheck.save()
    console.log("5")
    res.json({
        status: true,
        message: "Users Signed Up Successfully"
    }) 
   }catch{
    return res.status(400).json({
        status:false,
        message:"Signup not successful"
    })
   }
   
   
   
    // res.json({
    //     status:true,
    //     message:"Signup Successfull"
    // })
}
export const loginController =(req,res)=>{
    res.json({
        status:true,
        message:"Login Successfull"
    })
}
export const logoutController =(req,res)=>{
    res.json({
        status:true,
        message:"Logout Successfull"
    })
}
export const forgetPasswordController =(req,res)=>{
    res.json({
        status:true,
        message:"Password forget Successfull"
    })
}