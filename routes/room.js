import express from "express";
import { authenticateJWT } from "../middleware/verify-token.js";
import { createRoom } from "../controllers/chat-room.js";

const router = express.Router();

router.post("/room", authenticateJWT, createRoom)


export default router;