import express from "express";
import { getMyProfile, login, logout } from "../controllers/admin.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();


router.post("/login", login);

router.get("/logout", logout);

router.get("/me", getMyProfile);

export default router;