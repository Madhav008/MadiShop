const mongoose = require("mongoose");
const dotenv = require("dotenv");
const users = require("./data/users");
const products = require("./data/product");
const User = require("./models/userModel");
const Product = require("./models/productModel");
const Order = require("./models/orderModel");
const connectDB = require("./config/db");

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUser = await User.insertMany(users);

    const adminUser = createdUser[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });
    await Product.insertMany(sampleProducts)
    console.log('Data impoted')
    process.exit(1)
  } catch (error) {
      console.error(error)
    process.exit(1)

  }
};
importData()
