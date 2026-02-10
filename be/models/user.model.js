import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        unique: true,
        required: true

    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    bio:{
        type: String,
    },
    profilePic:{
        type: String
    },
    followersCount: {
        type: Number,
        default: 0,
    },
    followingCount:{
        type: Number,
        default: 0,
    },
    postCount:{
        type: Number,
        default: 0
    },
    isVerified: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

export const User = mongoose.model("User", userSchema);

