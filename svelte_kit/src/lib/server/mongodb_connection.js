import dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";

let client;

const uri = process.env['MONGODB_URI'];

export const connectMongo = async () => {
    if (!uri) {
        throw new Error("Please add your Mongodb URI to .env.local");
    }
    if (process.env['NODE_ENV'] === 'development') {
        if (!global._mongoClientPromise) {
            global._mongoClientPromise = await mongoose.connect(uri)
        }
        client = global._mongoClientPromise
        console.log("Starting mongo... in development mode...");
    } else {
        client = await mongoose.connect(uri);
        console.log("Starting mongo...");
    }
}





