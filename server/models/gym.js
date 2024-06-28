import {model, Schema} from "mongoose";

const gymSchema = new Schema({
    gyms : []
})

const Gyms = model("gyms", gymSchema);

export default Gyms;