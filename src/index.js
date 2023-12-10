// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import express from "express";
const app = express();

dotenv.config({
  path:'./env'
})

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log("Server is running");
      console.log("Database is connected");

      console.log("PORT: ", process.env.PORT);

      console.log("MONGODB_URI: ", process.env.MONGODB_URI);
    })
  })
  .catch((err) => {
    console.log("MONGODB Connection failed ! ",err);
  });






/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants";

  
// One way to connect database
// const connectDB(){}
// connectDB()

// An immediately invoked ()()function expression, or IIFE (pronounced iffy), is a function that is called immediately after it is defined

( async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error", () => {
      console.log("Error: ", error);
      throw error;
    })
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    })
  } catch (error) {
    console.error("ERROR: ",error)
  }
})()

*/