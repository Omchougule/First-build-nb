import {model, Schema} from "mongoose";

const contactSchema = new Schema({
    email : String,
    message : String,
})

const Contact = model("contacts", contactSchema);

export default Contact;