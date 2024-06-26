import { model, Schema } from "mongoose";

const OrderItemSchema = new Schema(
  {
    productId: { type: Schema.Types.ObjectId, ref: "products", required: true },
    productName: { type: String, required: true },
    productPrice: { type: Number, required: true },
    quantity: { type: Number, required: true },
    image : { type: String, required: true}
  },
  { _id: false }
);

const orderschema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "user", required: true },
  orderId: { type: String, required: true, unique: true },
  userName: { type: String, required: true },
  address: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  date: { type: Date, default: Date.now },
  paymentAmmount: { type: Number, required: true },
  order: [OrderItemSchema],
  summary : {type : Object, required: true},
  status: { type: String, enum: ['Processing', 'Shipped', 'In Transit', 'Delivered', 'Cancelled'], default: 'Processing' }
});

const Orders = model("orders", orderschema);

export default Orders;
