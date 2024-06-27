import {model, Schema} from "mongoose";

const ProductSchema = new Schema(
    {
        proId : String,
        imageUrl : String,
        title : String,
        description : String,
    }
  );

const FavouriteSchema = new Schema({
    userId: String,
    favourites : [ProductSchema]
})

const Favourite = model("favourites", FavouriteSchema);

export default Favourite;