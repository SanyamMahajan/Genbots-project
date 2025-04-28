import mongoose, { Schema } from "mongoose";

const querySchema = new Schema({
    question: {
        type: String,
        required: true,
        trim: true,
    },
    answer: {
        type: String,
        default: "",
    },
    askedBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    answeredBy: {
        type: Schema.Types.ObjectId,
        ref: "User", // Mentor
    },
    isAnswered: {
        type: Boolean,
        default: false,
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

export const Query = mongoose.model("Query", querySchema);
