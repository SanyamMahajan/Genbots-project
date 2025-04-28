import mongoose, { Schema } from "mongoose";

const slotSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    mentor: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    type: {
        type: String,
        enum: ["chat", "audio", "video"],
        required: true,
    },
    scheduledAt: {
        type: Date,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export const Slot = mongoose.model("Slot", slotSchema);
