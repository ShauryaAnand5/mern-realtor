import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema({
    username:{
        type: string,
        required: true,
        unique: true,
    },
    email:{
        type: string,
        required: true,
        unique: true,
    },
    password:{
        type: password,
        required: true,
    }
},{ timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;