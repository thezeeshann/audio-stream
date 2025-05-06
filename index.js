import express from "express"
import dotenv from "dotenv"
import authRouter from "./routes/auth.js"
import messageRoute from "./routes/message.js"
import roomRoute from "./routes/room.js"
import followUserRoute  from "./routes/follow.js"
import { connectDB } from "./config/db.js"
import cookieParser from "cookie-parser"
dotenv.config()

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(cookieParser());
app.use('/uploads', express.static('uploads'));


(async () => {
    try {
        await connectDB();
        console.log("Database synced!");
    } catch (error) {
        console.error("Error creating the table:", error);
        process.exit(1);
    }
})();

app.use("/api/v1/auth", authRouter)
app.use("/api/v1/message", messageRoute)
app.use("/api/v1/room", roomRoute)
app.use("/api/v1/follow", followUserRoute)

app.get("/", (req, res) => {
    return res.json({
        success: true,
        message: 'Your server is up and running....'
    });
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
})