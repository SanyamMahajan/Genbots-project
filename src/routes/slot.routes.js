import { Router } from "express";
import { bookSlot, getMentorSlots, getUserSlots } from "../controller/slot.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { isUser, isMentor } from "../middlewares/query.middleware.js";

const router = Router();

// User books a slot
router.post("/book", verifyJWT, isUser, bookSlot);

// Mentor sees slots
router.get("/mentor-slots", verifyJWT, isMentor, getMentorSlots);

// User sees slots
router.get("/user-slots", verifyJWT, isUser, getUserSlots);

export default router;
