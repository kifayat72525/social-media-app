import { Router } from "express";
import {
    
    createComment,
    deleteComment,
    getAllCommentsOnSinglePost
} from "../controllers/comment.controller.js"
const commentRouter = Router()

commentRouter.post("/", createComment)
commentRouter.get("/post/:postId",getAllCommentsOnSinglePost )
commentRouter.delete("/:id",deleteComment)

export default commentRouter;