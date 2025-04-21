import express from "express";
import { register, login, sendOTP } from "../controllers/auth.js"

const router = express.Router();

router.post("/register", register)
router.post("/login", login)
router.post("/sendotp", sendOTP)

export default router;