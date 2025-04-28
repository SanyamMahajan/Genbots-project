import mongoose, { Schema } from "mongoose";

const ideaSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    published: {
        type: Boolean,
        default: false, // idea is unpublished by default
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

export const Idea = mongoose.model("Idea", ideaSchema);
