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
    if (userPassword.length < 8) {
        console.log("3")
        return res.status(400).json({
        status: false,
        message: "Password length should be minimum 8 characters"
    })
    };
    console.log("4")
    const user = {
        userName:userName,
        userEmail:userEmail,
        userPassword:userPassword
    }

    console.log("5 ==>",user)
    const userSchemaCheck = new userSchema(user)
    console.log("6",userSchemaCheck)
    
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