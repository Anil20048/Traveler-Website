// server/server.js
const express = require("express");
const Razorpay = require("razorpay");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Razorpay instance
const instance = new Razorpay({
  key_id: "rzp_test_41Nyj6VrclMlo7",   // apna Razorpay test key id
  key_secret: "1qpsnzdcXI9Obi3b5EamYCyX" // apna Razorpay secret
});

// API to create order
app.post("/create-order", async (req, res) => {
  try {
    const options = {
      amount: req.body.amount * 100, // amount in paisa
      currency: "INR",
      receipt: "receipt#1",
    };

    const order = await instance.orders.create(options);
    res.json(order);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating order");
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
