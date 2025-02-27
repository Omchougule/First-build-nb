import express, { json } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';
import Razorpay from 'razorpay'
import crypto from 'crypto';

import User from './models/user.js';
import Products from './models/product.js';
import Favourite from './models/favourite.js'
import Cart from './models/cart.js'
import Address from './models/addresses.js'
import Orders from './models/orders.js'
import DiscountCode from './models/code.js'
import Reviews from './models/review.js'
import Contact from './models/contact.js';
import Gyms from './models/gym.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


const pass = encodeURIComponent("7EKxdvV6vv4N-nr")
const userN = encodeURIComponent("AmitKumbhar4_24")

const connectDB = async () => {
  try {

    await mongoose.connect("mongodb+srv://nandurkarom172:Pass%40123@cluster0.jkq4ihm.mongodb.net/nutribites");
    // await mongoose.connect(`mongodb+srv://${userN}:${pass}@cluster0.qkvogem.mongodb.net/Nutribites?retryWrites=true&w=majority&appName=Cluster0`);
    console.log('Database Connected');
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
}

connectDB();

const PORT = process.env.PORT || 5000;

app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "Server is up and running",
    data: null
  })

});


// ----------------------------------------------------------user-----------------------------------

app.post('/updateuser', async (req, res) => {

  const { email, updatedemail, userName, phoneNumber, address, userPhoto } = req.body
  const user = await User.find({ email })

  if (user) {
    const updateuser = { userName, phoneNumber, address, email: updatedemail, userPhoto }
    const updateduser = await User.findOneAndUpdate({ email }, updateuser, { new: true, runValidators: true })
    res.json({
      success: true,
      message: "User updated successfully",
      data: updateduser
    })
  }
  else {
    res.json({
      success: true,
      message: "User not found!",
      data: null
    })
  }

})

app.post('/oauth', async (req, res) => {
  try {
    const sid = uuidv4()
    const { email, userName } = req.body
    const user = await User.findOne({ email })
    if (user) {
      user.sessionId = sid
      user.save()
      res.json({
        success: true,
        data: user
      });
    }
    else {
      const newUser = await User.create({
        email,
        userName,
        sessionId: sid,
        createdAt: new Date(),
        address: "",
        isLoggedIn: true
      });
      res.json({
        success: true,
        data: newUser
      });
    }
  } catch (error) {
    console.log(error);
  }
})

app.post("/signin", async (req, res) => {
  const { email, password, userName, phoneNumber } = req.body;
  const sid = uuidv4()
  try {

    let existingUser = await User.findOne({ email });

    if (existingUser) {

      existingUser.isLoggedIn = true;
      await existingUser.save();

      res.json({
        success: true,
        message: "User already exists!",
        data: existingUser
      });
    } else {

      const newUser = await User.create({
        email,
        password,
        phoneNumber,
        userName,
        sessionId: sid,
        createdAt: new Date(),
        address: "",
        isLoggedIn: true
      });

      res.json({
        success: true,
        message: "New user created and logged in successfully",
        data: newUser
      });
    }
  } catch (error) {
    console.error("Error creating or updating user:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null
    });
  }
});


app.get("/login", async (req, res) => {
  try {
    const email = req.query.email;
    const password = req.query.password;
    const user = await User.find({ email });
    // console.log(user);
    // console.log(uuidv4());
    if (user.length > 0) {
      if (user[0].password == password) {
        user[0].sessionId = uuidv4();
        user[0].save();
        // console.log("user :",user[0]);
        res.json({
          success: true,
          message: "Users fetched ",
          data: user[0]
        });
      }
      else {
        res.json({
          success: true,
          message: "Wrong password",
          data: null,
        });
      }
    }
    else {
      res.json({
        success: true,
        message: "User not found",
        data: null
      });
    }

  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null
    });
  }
});

// Logout Api
app.post("/user/logout", async (req, res) => {
  const { email } = req.body;

  try {

    let user = await User.findOne({ email });

    if (user) {

      user.isLoggedIn = false;
      await user.save();

      res.json({
        success: true,
        message: "User logged out successfully",
        data: user
      });
    } else {
      res.status(404).json({
        success: false,
        message: "User not found",
        data: null
      });
    }
  } catch (error) {
    console.error("Error logging out user:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null
    });
  }
});

//get user 

app.post('/getuser', async (req, res) => {
  try {
    const { email, sessionId } = req.body
    const user = await User.findOne({ email, sessionId });
    if (user) {
      res.json({
        success: true,
        message: "User fetched",
        data: user
      })
    }
    else {
      res.json({
        success: true,
        message: "User not found",
        data: null
      })
    }
  } catch (error) {
    console.log("Server error", error);
  }
})

app.get('/getusers', async (req, res) => {
  try {
    const users = await User.find()
    res.json({
      success: true,
      data: users
    })
  } catch (error) {
    console.log(error);
  }
})

// address
app.post('/address', async (req, res) => {
  try {
    const { userId, addresses } = req.body
    const addresses_string = JSON.stringify(addresses)
    const user = await Address.findOneAndUpdate({ userId }, { address: addresses_string }, { new: true })
    if (user) {
      res.json({
        success: true,
        data: user
      })
    }
    else {
      const Nuser = await Address.create({ userId, address: addresses_string })
      res.json({
        success: true,
        data: Nuser
      })
    }
  } catch (error) {
    console.log(error);
  }
})

app.post('/getadd', async (req, res) => {
  try {
    const { userId } = req.body
    const userAdd = await Address.findOne({ userId })
    if (userAdd) {
      res.json({
        success: true,
        data: userAdd
      })
    }
    else {
      res.json({
        success: false,
        data: null
      })
    }
  } catch (error) {
    console.log(error);
  }
})


//---------------------------------------------------Products------------------------->

app.post('/addproduct', async (req, res) => {
  try {
    const product = await Products.create(req.body);
    if (product) {
      res.json({
        success: true,
        data: product
      })
    }
    else {
      res.json({
        success: false,
        data: null
      })
    }
  } catch (error) {
    console.error(error);
  }
})

app.get('/getproducts', async (req, res) => {
  try {
    const products = await Products.find();
    if (products.length > 0) {
      res.json(products)
    }
    else {
      res.json([])
    }
  } catch (error) {
    console.log(error);
  }
})

app.post('/getproduct', async (req, res) => {
  try {
    const { id } = req.body
    const product = await Products.findOne({ _id: id })
    if (product) {
      res.json({
        success: true,
        data: product
      })
    }
    else {
      res.json({
        success: false,
        data: null
      })
    }
  } catch (error) {
    console.log(error);
  }
})

app.delete('/deleteproduct/:id', async (req, res) => {
  try {
    const id = req.params.id
    const prod = Products.findOne({ _id: id })
    if (prod) {
      await Products.deleteOne({ _id: id })
      res.json({ success: true })
    }
    else {
      res.json({
        success: false
      })
    }
  } catch (error) {
    console.log(error);
  }
})

app.post('/editproduct', async (req,res) => {
  try {
    const {id, title, imageUrl, description, price} = req.body
    const product = await Products.findOne({_id : id})
    if(product)
    {
      product.description = description
      product.title = title
      product.imageUrl = imageUrl
      product.price = price
      await product.save()
      res.json({
        success : true,
        data : product
      })
    }
    else
    {
      res.json({
        success : false
      })
    }
  } catch (error) {
    console.log(error);
  }
})
//-----------------------------------------------------Favorites----------------------->

app.post('/addfav', async (req, res) => {
  try {
    const { userId, favourites } = req.body
    const user = await Favourite.findOne({userId})
    if(user)
    {
        user.favourites = favourites
        user.save()

        res.json({
        success : true,
          })
    }
    else {
      const fav = new Favourite({
        userId : userId,
        favourites : favourites
      })
      fav.save()
      res.json({
        success: true,
        favourites: fav.favourites
      })
    }
  } catch (error) {
    console.log(error);
  }
})

app.post('/getfav', async (req, res) => {
  try {
    const { userId } = req.body
    const fav = await Favourite.findOne({ userId });
    if (fav) {
      //convert string to array and send
      res.json({
        success: true,
        favourites: fav.favourites
      })
    }
    else {
      res.json(
        {
          success: false
        }
      )
    }
  } catch (error) {
    console.log(error);
  }
})

// ----------------------------------------------------------Cart------------------------------->

app.post('/addcart', async (req, res) => {
  try {
    const product = req.body
    let pro = await Cart.findOne({ proId: product.proId, userId: product.userId })
    if (pro) {
      pro.set(product)
      await pro.save()
    }
    else {
      await Cart.create(product)
    }
    res.json({
      success: true
    })
  } catch (error) {
    console.log(error);
  }
})

app.get('/getcart', async (req, res) => {
  try {
    let cart = await Cart.find()
    res.json(cart)
  } catch (error) {
    console.log(error);
  }
})

app.post('/removecart', async (req, res) => {
  try {
    const { userId, proId } = req.body
    const deletedUser = await Cart.findOneAndDelete({ userId, proId })
    if (deletedUser) {
      res.json({
        success: true,
        data: deletedUser
      })
    }
    else {
      res.json({
        success: false,
        data: null
      })
    }
  } catch (error) {
    console.log(error);
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});


// -----------------------------------------------------Orders------------------------------------------------------

app.post('/addorder', async (req, res) => {
  try {

    const order = await Orders.create(req.body);
    if (order) {
      res.json({
        success: true,
        data: order
      })
    }
    else {
      res.json({ success: false, data: null })
    }
  } catch (error) {
    console.error(error);
  }
})

app.post('/getorders', async (req, res) => {
  try {
    const { userId } = req.body
    const orders = await Orders.find({ userId });
    if (orders.length > 0) {
      res.json({
        success: true,
        data: orders
      })
    }
    else {
      res.json({
        success: false,
        data: []
      })
    }
  } catch (error) {
    console.log(error);
  }
})

app.post('/getorder', async (req, res) => {
  try {
    const { orderId } = req.body
    const order = await Orders.findOne({ orderId });
    if (order) {
      res.json({
        success: true,
        data: order
      })
    }
    else {
      res.json({
        success: false,
        data: null
      })
    }
  } catch (error) {
    console.log(error);
  }
})

app.get('/orders', async (req, res) => {
  try {
    const orders = await Orders.find();
    if (orders) {
      res.json({
        success: true,
        data: orders
      })
    }
    else {
      res.json({
        success: false,
        data: []
      })
    }
  } catch (error) {
    console.log(error);
  }
})

app.put('/updatestatus/:orderId', async (req, res) => {
  try {
    const orderId = req.params.orderId
    const { status } = req.body
    const order = await Orders.findOneAndUpdate({ orderId }, { status }, { new: true })
    if (order) {
      res.json({
        success: true,
        data: order
      })
    }
    else {
      res.json({
        success: false
      })
    }
  } catch (error) {
    console.log(error);
  }
})

app.post('/cancelorder', async (req, res) => {
  try {
    const { userId, orderID } = req.body
    const order = await Orders.findOneAndUpdate({ userId, orderId: orderID }, { status: 'Cancelled' }, { new: true })
    if (order) {
      res.json({
        success: true,
        data: order
      })
    }
    else {
      res.json({
        success: false,
        data: null
      })
    }
  } catch (error) {
    console.log(error);
  }
})

// -----------------------------------------------------codes--------------------------------------------------------

app.post('/addcode', async (req, res) => {
  try {

    const code = await DiscountCode.create(req.body);
    if (code) {
      res.json({
        success: true,
        data: code
      })
    }
    else {
      res.json({ success: false, data: null })
    }
  } catch (error) {
    res.json({ success: false, data: null, message: error.message })
    console.error(error);
  }
})

app.post('/getcode', async (req, res) => {
  try {
    const { code } = req.body
    const val = await DiscountCode.findOne({ code });
    if (val) {
      res.json({
        success: true,
        data: val
      })
    }
    else {
      res.json({
        success: false,
        data: null
      })
    }
  } catch (error) {
    console.log(error);
  }
})

const deactivateExpiredDiscountCodes = async () => {
  const now = new Date();
  await DiscountCode.updateMany(
    { expirationDate: { $lt: now }, isActive: true },
    { isActive: false }
  );
  console.log('Expired discount codes deactivated');
};

// Example usage: run this function periodically (e.g., with setInterval or a cron job)
setInterval(deactivateExpiredDiscountCodes, 3600000); // Run every hour



// ----------------------------------------------------------Review-------------------------------------------------------

app.post('/addreview', async (req, res) => {
  try {
    const review = await Reviews.create(req.body);
    if (review) {
      res.json({
        success: true,
        data: review
      })
    }
    else {
      res.json({ success: false, data: null })
    }
  } catch (error) {
    res.json({ success: false, data: null, message: error.message })
    console.error(error);
  }
})

app.get('/getreviews', async (req, res) => {
  try {
    const reviews = await Reviews.find()
    if (reviews.length > 0) {
      res.json({
        success: true,
        data: reviews
      })
    }
    else {
      res.json({
        success: false,
        data: []
      })
    }
  } catch (error) {
    console.log(error);
  }
})


// --------------------------------------------------------------payment--------------------------------------------------

const razorpay = new Razorpay({
  key_id: 'rzp_test_lq1pO46Zam0Zpz',
  key_secret: 'xRYssCTOb3Anpg3yBiRDCOlP'
});

app.post('/paymentorder', async (req,res) => {
  try {
    const { amount, currency, receipt, notes } = req.body;
    const options = {
      amount: amount * 100, // amount in the smallest currency unit (paise for INR)
      currency,
      receipt,
      notes
    };
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
})

app.post('/authpayment', async (req, res) => {
  try {
    const secret = 'xRYssCTOb3Anpg3yBiRDCOlP'
    const {razorpay_payment_id, razorpay_order_id, razorpay_signature, order_id, amount, userId, userName, address, phoneNumber, paymentMethod, order, summary} = req.body
    // console.log(req.body);
    function generateHmacSha256Signature(data, secret) {
      return crypto.createHmac('sha256', secret)
      .update(data)
      .digest('hex');
    }
    const data = `${order_id}|${razorpay_payment_id}`;
    const generated_signature = generateHmacSha256Signature(data, secret);
    if (generated_signature === razorpay_signature) {
      // Create order with payment details and confirmed status
      const paymentDetails = {
          razorpay_payment_id,
          razorpay_order_id,
          razorpay_signature,
          status: 'confirmed',
          amount : amount / 100
      };

      const newOrder = new Orders({
          userId,
          orderId: order_id,
          userName,
          address,
          phoneNumber,
          paymentMethod, 
          paymentAmount: amount / 100,
          order,
          summary,
          payment: paymentDetails,
          status: 'Processing'
      });

      await newOrder.save();

      // Redirect to frontend with success message
      res.json({
        success : true,
        orderId : order_id
      })
  } else {
      // Handle payment verification failure
      res.json({
        success : false
      })
  }
  } catch (error) {
    console.log(error);
  }
})

// ------------------------------------------------Feedback-----------------------------------------------------

app.post('/contact', async(req,res) => {
  try {
    const {email, message} = req.body
    const msg = await Contact.create({email, message})
    if(msg)
    {
      res.json({
        success : true,
        data : msg
      })
    }
    else
    {
      res.json({
        success : false
      })
    }
  } catch (error) {
    console.log(error);
  }
})

app.get('/getcontact',async (req,res) => {
  try {
    const msg = await Contact.find()
    res.json(msg)
  } catch (error) {
    console.log(error);
  }
})

// --------------------------------------------------Gyms----------------------------------------------------------

app.post('/addgym', async (req,res) => {
  try {
    const {gymlist} = req.body;
    const gyms = await Gyms.findOne()
    if(!gyms)
    {
      const gyms = Gyms.create({gyms: gymlist});
      res.json(gyms);
    }
    else
    {
      gyms.gyms = gymlist
      gyms.save()
      res.json({
        success: true,
        data: gyms.gyms
      })
    }
    
  } catch (error) {
    console.log(error);
  }
})

app.get('/getgyms', async (req, res) => {
  try {
    const gyms = await Gyms.findOne()
    if(gyms.gyms.length > 0)
    {
      res.json({
        success: true,
        data: gyms.gyms
      })
    }
    else
    {
      res.json({
        success: false,
        data: []
      })
    }
  } catch (error) {
    console.error(error);
  }
})