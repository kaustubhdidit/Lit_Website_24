import express from "express";
import {
  deleteEvent,
  getEvent,
  getMyEvent,
  newEvent,
} from "../controllers/event.js"
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", newEvent);

router.get("/roomAll", getEvent);

// router.put("/edit/:id", updateRoom);


router.get("/my", getMyEvent);

router.get("/");


router
  .route("/del/:id")
  .delete(deleteEvent);

export default router;
