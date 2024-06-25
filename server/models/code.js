import {model, Schema} from "mongoose";

const discountCodeSchema = new Schema({
    code: {
      type: String,
      required: true,
      unique: true
    },
    discountPercentage: {
      type: Number,
      required: true
    },
    expirationDate: {
      type: Date,
      required: true
    },
    isActive: {
      type: Boolean,
      default: true
    }
  });
  
  const DiscountCode = model('DiscountCode', discountCodeSchema);

export default DiscountCode;
