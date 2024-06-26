import {model, Schema} from "mongoose";

const productschema = new Schema({
    title : String,
    imageUrl: String,
    description: String,
    price: Number,
    category : { type: String, enum: ['Smoothie', 'Appetizer','Shakes', 'Meals'], default: 'Smoothie' }
})

const Products = model("products", productschema);

export default Products;