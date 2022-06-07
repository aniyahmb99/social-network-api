//express
const express = require("express");
const app = express();

//mongoose
const mongoose = require("mongoose");

// express
app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000);

// mongoose
import mongoose from "mongoose";
