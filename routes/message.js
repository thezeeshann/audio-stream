import express from "express";
import { sendMessage, getMessages } from "../controllers/message.js";
import { authenticateJWT } from "../middleware/verify-token.js";

const router = express.Router();

router.post("/send", authenticateJWT, sendMessage)
router.get("/get", authenticateJWT, getMessages)


export default router;