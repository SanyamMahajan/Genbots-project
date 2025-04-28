import { Query } from "../models/query.model.js";
import { asyncHandler } from "../utils/asynchHandler.js";

// User asks a question
export const askQuestion = asyncHandler(async (req, res) => {
    const { question } = req.body;

    const newQuery = await Query.create({
        question,
        askedBy: req.user._id,
    });

    res.status(201).json({
        success: true,
        message: "Question submitted successfully",
        newQuery,
    });
});

// Mentor answers the question
export const answerQuestion = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { answer } = req.body;

    const query = await Query.findById(id);

    if (!query) {
        return res.status(404).json({ success: false, message: "Query not found" });
    }

    query.answer = answer;
    query.answeredBy = req.user._id;
    query.isAnswered = true;
    query.updatedAt = Date.now();

    await query.save();

    res.status(200).json({
        success: true,
        message: "Answer submitted successfully",
        query,
    });
});

// View all answered queries (for user side)
export const getAllAnsweredQueries = asyncHandler(async (req, res) => {
    const queries = await Query.find({ isAnswered: true }).populate("askedBy", "fullName avatar");

    res.status(200).json({
        success: true,
        queries,
    });
});

// View queries to answer (for mentor)
export const getUnansweredQueries = asyncHandler(async (req, res) => {
    const queries = await Query.find({ isAnswered: false }).populate("askedBy", "fullName avatar");

    res.status(200).json({
        success: true,
        queries,
    });
});
