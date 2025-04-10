const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const connectDb = require("./config/db");
require("dotenv").config("./config/.env");

// imported routes
const userRoute = require("./routes/user.route");

const app = express();
connectDb();
// middleware that must need
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// routes we use
app.use("/api/v1/user", userRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
