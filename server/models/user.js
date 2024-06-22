import {model, Schema} from "mongoose";

const userSchema = new Schema({
    email : String,
    userName : String,
    address : String,
    phoneNumber : String,
    password : String,
    sessionId: {
        type : String,
        default : '',
        expires : '1h'
    },
    // userPhoto : String,
    
    isLoggedIn : {
        type : Boolean,
        default : false
    }
})

const User = model("user", userSchema);

export default User;