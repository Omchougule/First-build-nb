import {model, Schema} from "mongoose";

const cartschema = new Schema({
    proId:String,
    userId: String,
    title : String,
    imageUrl: String,
    description: String,
    price: Number,
    quantity: Number
})

const Cart = model("cart", cartschema);

export default Cart;