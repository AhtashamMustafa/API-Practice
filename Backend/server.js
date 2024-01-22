import express from "express";
import dotenv from "dotenv"
import { authRoutes } from "./routes/authroutes.js";
import { dbConnection } from "./Config/config.js";

dotenv.config();
const app = express();
app.use(express.json());

dbConnection()


app.use("/auth",authRoutes)



const port = process.env.PORT ||3000;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})

