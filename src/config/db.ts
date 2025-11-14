import mongoose from "mongoose";
import { MongoClient, ServerApiVersion } from "mongodb";
import { logger } from "../utils/logger";
import { config } from ".";

export const connectDB = async (): Promise<void> => {
  try {
    if (!config.mongoUri) {
      throw new Error(
        "MongoDB connection string (MONGO_URI) not found in .env"
      );
    }
    // no DB name → defaults to "test"
    console.log("Connecting to MongoDB...", config.mongoUri);
    const client = new MongoClient(config.mongoUri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    // ping mongo server
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    logger.info("🟢 MongoDB connected successfully");
    // connect to mongo db
    const conn = await mongoose.connect(config.mongoUri,{
      serverSelectionTimeoutMS: 5000,
    });
    logger.info(`🟢 MongoDB connected: ${conn.connection.host}`);
  } catch (error: any) {
    logger.error(`🔴 MongoDB connection failed: ${error.message}`);
    process.exit(1); // Exit process if DB connection fails
  }
};
