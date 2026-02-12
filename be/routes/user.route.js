import { Router } from "express";
import { 
    getSingleUser,
    updateSingleUser,
    getUserBySearch,
    getUserFromFollowers,
    getUserFromFollowing
 } from "../controllers/user.controller.js";


 const userRouter = Router()

 userRouter.get("/:id", getSingleUser)
 userRouter.put("/:id", updateSingleUser)
 userRouter.get("/", getUserBySearch)
 userRouter.get("/:id/followers", getUserFromFollowers)
 userRouter.get("/:id/following", getUserFromFollowing)

export default userRouter