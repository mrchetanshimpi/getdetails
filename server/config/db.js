const mongoose = require("mongoose");

module.exports = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
  }
};
