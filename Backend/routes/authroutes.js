import express from "express";
import { forgetPasswordController, loginController, logoutController, signupController } from "../controllers/authControllers.js";


const authRoutes =express.Router()

authRoutes.post("/signup",signupController)
authRoutes.post("/login", loginController)
authRoutes.post("/logout", logoutController)
authRoutes.put("/forgetPassword", forgetPasswordController)

export {authRoutes};