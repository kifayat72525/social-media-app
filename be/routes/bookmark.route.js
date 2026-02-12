import { Router } from "express";
import { addToBookmark, deleteFromBookmark, getAllBookmarks } from "../controllers/bookmark.controller.js";

const bookmarkRouter = Router()

bookmarkRouter.post("/:postId", addToBookmark)
bookmarkRouter.delete("/:postId", deleteFromBookmark)
bookmarkRouter.get("/", getAllBookmarks)

export default bookmarkRouter;