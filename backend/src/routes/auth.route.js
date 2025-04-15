import express from "express";
import { signup, login, logout } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { updatedProfile } from "../controllers/auth.controller.js";
import { checkAuth } from "../controllers/auth.controller.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
//protect checks forauthenticatiion of user.
router.put("/update-profile", protectRoute, updatedProfile);
router.get("/check", protectRoute, checkAuth);
export default router; // ✅ This ensures routes are properly exported
