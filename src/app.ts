import express, { Application } from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import { userRouter } from  "./routes/userRoutes";
import { errorHandler } from "./middlewares/errorHandler";

const app: Application = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// Routes
app.use("/api/users", userRouter);

// Health check
app.get("/", (req, res) => {
  res.status(200).json({ message: "API is running ✅" });
});

// Error handler
app.use(errorHandler);

export default app;
