import {model, Schema} from "mongoose";

const productschema = new Schema({
    userId: String,
    favourites : String
})

const Favourite = model("favourites", productschema);

export default Favourite;