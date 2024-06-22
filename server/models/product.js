import {model, Schema} from "mongoose";

const productschema = new Schema({
    title : String,
    imageUrl: String,
    description: String,
    price: Number
})

const Products = model("products", productschema);

export default Products;