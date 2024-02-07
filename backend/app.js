import express from "express";
import adminRouter from "./routes/admin.js";
import eventRouter from "./routes/event.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";

export const app=express();

config({
    path: "./data/config.env",
  });

  // Using Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    // origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Using routes
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/event", eventRouter);

app.get("/", (req, res) => {
  res.send("Nice working");
});

// Using Error Middleware
app.use(errorMiddleware);
