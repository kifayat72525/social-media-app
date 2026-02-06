import { Router } from "express";
import { loginFunction } from "../controllers/user.controller.js";

const userRouter = Router()

userRouter.get("/login", loginFunction)

export default userRouter