import { Router } from "express";
import { askQuestion, answerQuestion, getAllAnsweredQueries, getUnansweredQueries } from "../controller/query.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { isUser, isMentor } from "../middlewares/query.middleware.js";

const router = Router();

// User asks a question
router.post("/ask", verifyJWT, isUser, askQuestion);

// Mentor answers a question
router.post("/answer/:id", verifyJWT, isMentor, answerQuestion);

// User gets all answered queries
router.get("/answered", verifyJWT, isUser, getAllAnsweredQueries);

// Mentor sees unanswered queries
router.get("/unanswered", verifyJWT, isMentor, getUnansweredQueries);

export default router;
