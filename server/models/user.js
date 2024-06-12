import {model, Schema} from "mongoose";

const userSchema = new Schema({
    email : String,
    userName : String,
    userPhoto : String,
    isLoggedIn : {
        type : Boolean,
        default : false
    }
})

const User = model("user", userSchema);

export default User;