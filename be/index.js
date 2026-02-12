import express from "express";
import userRouter from "./routes/user.route.js";
import { BASE_API } from "./constants/contansts.js";
import authRouter from "./routes/auth.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import likeRouter from "./routes/like.route.js";
import followRouter from "./routes/follow.route.js";
import bookmarkRouter from "./routes/bookmark.route.js";

const app = express()

// api design
// api/v1/
app.use(`/api/v1/auth`, authRouter)
app.use(`api/v1/users`, userRouter)
app.use(`/api/v1/posts`, postRouter)
app.use(`/api/v1/comments`, commentRouter)
app.use(`/api/v1/likes`, likeRouter)
app.use(`/api/v1/follows`, followRouter)
app.use(`/api/v1/bookmarks`, bookmarkRouter)

app.listen(3000, ()=>{
    console.log("APP IS LISTNING ON PORT 3000");
    
})