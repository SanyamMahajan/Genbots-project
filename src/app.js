import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config(); // ✅ Now it will automatically look for .env in root
import connectDB from "./db/index.js";
import userRouter from "./routes/user.routes.js";
import morgan from "morgan";
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(morgan("dev")); // Logging middleware

//routes import

//routes declaration
app.use("/api/v1/users", userRouter);

app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`Server is running on port http://localhost:${process.env.PORT}`);
});

/*import { DB_NAME } from "./constants";  

import express from "express";
const app = express();

(async () => {
    try {
        await mongoose.connect('${process.env.MONGODB_URI}/${DB_NAME}' )
        app.on("error", (error) => {
            console.error("MongoDB connection error:", error);
        });
        throw error;
        app.listen (process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        }
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
})()*/
