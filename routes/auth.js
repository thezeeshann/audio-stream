import express from "express";
import { register, login, sendOTP } from "../controllers/auth.js"
import { upload } from "../config/file-upload.js";

const router = express.Router();

router.post("/register", upload.single("profile"), register)
router.post("/login", login)
router.post("/sendotp", sendOTP)

export default router;