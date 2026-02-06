import express from "express";
import userRouter from "./routes/user.route.js";

const app = express()

app.use("/api/v1/user/", userRouter)
// app.use("/api/v1/posts/", postRouter)

app.listen(3000, ()=>{
    console.log("APP IS LISTNING ON PORT 3000");
    
})