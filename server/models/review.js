import {model, Schema} from "mongoose";

const reviewSchema = new Schema({
    productId : String,
    review : String,
    userName : String,
    userId : String,
})

const Reviews = model("reviews", reviewSchema);

export default Reviews;