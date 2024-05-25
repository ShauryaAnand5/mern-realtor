import express from "express";
import mongoose from "mongoose";
import connectToMongoDB from "./db/connectionToDB.js";
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to MongoDB!');
}).catch((err)=>{
    console.log(err);
});



const app = express();

app.listen(3000, () => {
    connectToMongoDB();
  console.log("The server is running on port 3000!!");
});