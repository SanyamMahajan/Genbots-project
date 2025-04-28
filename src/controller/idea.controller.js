import { Idea } from "../models/idea.model.js";
import { asyncHandler } from "../utils/asynchHandler.js";

// Create a new idea
export const createIdea = asyncHandler(async (req, res) => {
    const { title, description } = req.body;

    const idea = await Idea.create({
        title,
        description,
        createdBy: req.user._id,
    });

    res.status(201).json({
        success: true,
        message: "Idea created successfully",
        idea,
    });
});

// View own submitted ideas (for user)
export const getMyIdeas = asyncHandler(async (req, res) => {
    const ideas = await Idea.find({ createdBy: req.user._id });

    res.status(200).json({
        success: true,
        ideas,
    });
});

// View published ideas (for investor)
export const getPublishedIdeas = asyncHandler(async (req, res) => {
    const ideas = await Idea.find({ published: true }).populate("createdBy", "fullName avatar");

    res.status(200).json({
        success: true,
        ideas,
    });
});

// Admin can publish/unpublish ideas
export const publishIdea = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { publish } = req.body;

    const idea = await Idea.findById(id);

    if (!idea) {
        return res.status(404).json({ success: false, message: "Idea not found" });
    }

    idea.published = publish;
    await idea.save();

    res.status(200).json({
        success: true,
        message: `Idea has been ${publish ? "published" : "unpublished"}`,
    });
});

// Admin can delete idea
export const deleteIdea = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const idea = await Idea.findById(id);

    if (!idea) {
        return res.status(404).json({ success: false, message: "Idea not found" });
    }

    await idea.deleteOne();

    res.status(200).json({
        success: true,
        message: "Idea deleted successfully",
    });
});
