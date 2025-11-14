import app from "./app";
import { config } from "./config";
import { connectDB } from "./config/db";
import { logger } from "./utils/logger";

const startServer = async () => {
  try {
    await connectDB();

    app.listen(config.port, () => {
      logger.info(`🚀 Server running on http://localhost:${config.port}`);
    });
  } catch (error: any) {
    logger.error("❌ Failed to start server: " + error.message);
    process.exit(1);
  }
};

startServer();
