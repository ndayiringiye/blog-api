import mongoose  from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const CONN_DB= process.env.CONN_DB;

export const connectDb = async (req ,res) =>{
    try {
        await mongoose.connect()
        console.log("database connected");
    } catch (error) {
        console.log("connection failed");
    }
}