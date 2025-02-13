import dotenv from "dotenv";
import mongoose  from "mongoose";


dotenv.config();


const CONN_DB= process.env.CONN_DB;

export const connectDb = async () =>{
    try {
        await mongoose.connect(CONN_DB)
        console.log("database connected");
    } catch (error) {
        console.log("connection failed");
    }
}