import cors from "cors";
import dotenv from "dotenv"
import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./src/routes/auth.route.js"
import { connectDB } from "./src/lib/db.js"
import { app, server } from "./src/lib/socket.js"
import messageRoutes from "./src/routes/message.route.js"
dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
const PORT = 5001;
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

const startServer = async () => {
    try {
        await connectDB();  // Ensure DB connection before starting server
        server.listen(PORT, () =>
            console.log(`Server running on port ${PORT}`)
        );

    } catch (error) {
        console.error("Failed to connect to DB", error);
        process.exit(1); // Exit process on DB connection failure
    }
};
startServer();
export default app; // Export the app for testing or other purposes