import { Router } from "express";
import { signup, login, forgotPassword, me, resetPassword } from "../controllers/auth.controller.js";

const authRouter = Router()

authRouter.post("/signup", signup)
authRouter.post("/login", login)
authRouter.post("/forgot-password", forgotPassword)
authRouter.post("/reset-password", resetPassword)
authRouter.get("/me", me)




export default authRouter;