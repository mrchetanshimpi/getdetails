const mongoose = require("mongoose");

module.exports = async () => {
  try {
    const db = await mongoose.connect("mongodb://localhost:27017/");
    console.log("mongodb connected");
  } catch (error) {}
};
