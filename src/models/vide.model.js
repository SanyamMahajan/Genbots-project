import mongoose , {Schema} from "mongoose";

import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({
    videoFile: {
        type: String,//cloudinary url
        required: true,
    },

    thumbnailUrl: {
        type: String,
        required: true,
    },

    title: {
        type: String,
        required: true,
        trim: true,
        index: true,
    },

    description: {
        type: String,
        required: true,
        trim: true,
    },

    duration: {
        type: Number,
        required: true,
    },

    views:
    {
        type: Number,
        default: 0,
    },

    ispublished: {
        type: Boolean,
        default: true,
    },

    videoUrl: {
        type: String,
        required: true,
    },

    

    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    likesCount: {
        type: Number,
        default: 0,
    },

    dislikesCount: {
        type: Number,
        default: 0,
    },

    commentsCount: {
        type: Number,
        default: 0,
    },

}, { timestamps: true });   

videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", videoSchema);