import { Router } from "express";
import { like, unLike } from "../controllers/like.controller.js";

const likeRouter = Router()

likeRouter.post("/:postId", like)
likeRouter.delete("/:postId", unLike)

export default likeRouter;