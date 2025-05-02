import express from "express";
import { authenticateJWT } from "../middleware/verify-token.js";
import { followUser, getFollowers, getFollowing, unfollowUser } from "../controllers/follow.js";

const router = express.Router();

router.post("/follow", authenticateJWT, followUser)
router.delete("/unfollow", authenticateJWT, unfollowUser)
router.get("/follower/:userId", authenticateJWT, getFollowers)
router.get("/following/:userId", authenticateJWT, getFollowing)


export default router;