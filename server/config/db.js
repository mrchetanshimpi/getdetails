const mongoose = require("mongoose");

module.exports = async () => {
  try {
    const db = await mongoose.connect("mongodb://localhost:27017/bigDb");
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
  }
};
