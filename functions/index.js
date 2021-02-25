const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51I99H7LvmKKU7Q0StveTjKeBpC7EEKVWWyFTltuVGxUy6d5pTSdSK7Is3t4mWm0UFIKXMYa06gPJGwlaK5eC0c9s00QIUnFO2r"
);

// API
//App Config

const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", function (req, res) {
  res.status(200).send("hello world");
});

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "INR",
  });
  // 201 is OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen command

exports.api = functions.https.onRequest(app);

// Example Endpoint
//http://localhost:5001/e-clone-3bc43/us-central1/api
