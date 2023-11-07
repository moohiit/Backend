// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
  path:'./env'
})

connectDB()








/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express";
const app = express()
  
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