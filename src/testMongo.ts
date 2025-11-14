// testMongo.ts
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";


dotenv.config({ path: path.resolve(__dirname, "../.env") });

const testConnection = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
      throw new Error("MONGO_URI is not defined in .env");
    }

   
    console.log("MongoDB connected ✅");
    process.exit(0);
  } catch (error: any) {
    console.error("MongoDB connection failed ❌", error.message);
    process.exit(1);
  }
};

testConnection();
