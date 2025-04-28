import { Router } from "express";
import { createIdea, getMyIdeas, getPublishedIdeas, publishIdea, deleteIdea } from "../controller/idea.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { isUser, isInvestor } from "../middlewares/idea.middleware.js";
import { isAdmin } from "../middlewares/role.middleware.js";

const router = Router();

// User can create an idea
router.post("/create", verifyJWT, isUser, createIdea);

// User can view their own ideas
router.get("/my-ideas", verifyJWT, isUser, getMyIdeas);

// Investor can view all published ideas
router.get("/published", verifyJWT, isInvestor, getPublishedIdeas);

// Admin can publish/unpublish an idea
router.put("/publish/:id", verifyJWT, isAdmin, publishIdea);

// Admin can delete an idea
router.delete("/delete/:id", verifyJWT, isAdmin, deleteIdea);

export default router;
