import { Slot } from "../models/slot.model.js";
import { asyncHandler } from "../utils/asynchHandler.js";

// User books a slot
export const bookSlot = asyncHandler(async (req, res) => {
    const { mentorId, type, scheduledAt } = req.body;

    const slot = await Slot.create({
        user: req.user._id,
        mentor: mentorId,
        type,
        scheduledAt,
    });

    res.status(201).json({
        success: true,
        message: "Slot booked successfully",
        slot,
    });
});

// Mentor views all his booked slots
export const getMentorSlots = asyncHandler(async (req, res) => {
    const slots = await Slot.find({ mentor: req.user._id }).populate("user", "fullName avatar");

    res.status(200).json({
        success: true,
        slots,
    });
});

// User views his booked slots
export const getUserSlots = asyncHandler(async (req, res) => {
    const slots = await Slot.find({ user: req.user._id }).populate("mentor", "fullName avatar");

    res.status(200).json({
        success: true,
        slots,
    });
});
