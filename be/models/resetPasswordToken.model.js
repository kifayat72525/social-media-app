import mongoose from "mongoose";

const resetPasswordTokenSchema = new mongoose.Schema({
    user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
    },
    tokenHash:{
        type:String,
        required: true,
    },
    expiresAt:{
        type: Date,
        required: true,
    },
    used:{
        type: Boolean,
        default: false
    }
        
}, {timestamps: true})

export const ResetPasswordToken = mongoose.model("RestPasswordToken", resetPasswordTokenSchema);