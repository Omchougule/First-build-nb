import {model, Schema} from "mongoose";

const userSchema = new Schema({
    userId : String,
    address : String
})

const Address = model("address", userSchema);

export default Address;