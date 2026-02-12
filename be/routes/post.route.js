import { Router } from "express";
import {
    
    createPost,
    feed,
    getSinglePost,
    deletePost,
    getUserPost
} from "../controllers/post.controller.js"
const postRouter = Router()

postRouter.post("/", createPost)
postRouter.get("/feed", feed)
postRouter.get("/:id", getSinglePost)
postRouter.delete("/:id", deletePost)
postRouter.get("user/:userId", getUserPost)

export default postRouter;