const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");

dotenv.config();
connectDB();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Api is Running");
});

app.use("/api/products", productRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/orders", orderRoutes);
app.get("api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENTID);
});
app.listen(process.env.PORT || 5000, console.log("Server is Running on 5000"));
