const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
// middleware that must need
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
