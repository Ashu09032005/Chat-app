import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePic: {
        type: String,
        default: "",
    },
},
    { timestamps: true }
);
const User = mongoose.model("User", userSchema);//Singular n first char as upper case db-users apne aap
export default User;