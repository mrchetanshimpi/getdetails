const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const connectDb = require("./config/db");
require("dotenv").config("./config/.env");
const app = express();
connectDb();
// middleware that must need
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
