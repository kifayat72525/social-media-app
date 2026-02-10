import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    caption:{
        type: String,
    },
    mediaUrl:{
        type:String,
        required: true,
    },
    mediaType: {
        type: String,
        required: true,
    },
    likesCount:{
        type: Number,
        default: 0,
    },
    commentsCount:{
        type: Number,
        default: 0,
    }
}, {timestamps: true})

export const Post = mongoose.model("Post", postSchema)