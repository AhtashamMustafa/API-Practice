import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()

let database= process.env.MONGODB_URI

export const dbConnection = async ()=>{
    try{
        const con = await mongoose.connect(database)
        console.log(`MongoDB Connected: ${con.connection.host}`)
    }catch(e){
        console.log("Error ===>",e)}
    }
          