import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";



dotenv.config();
const app = express()
app.use(express.json());
 const PORT = process.env.PORT || 4000;
 
app.listen(PORT ,async ()=>{
    await connectDb()
    console.log(`server is running on port ${PORT}`)
})