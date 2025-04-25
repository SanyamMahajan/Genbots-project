import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        index: true,
    },
    
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },

    fullname: {
        type: String,
        required: true,
        index: true,
        trim: true,
    },

    avatar: {
        type: String, // cloudinary URL
        required: true,
    },

    coverImage: {
        type: String, // cloudinary URL
        required: true,
    },

    watchHistory: [{
        type: Schema.Types.ObjectId,
        ref: "Video",
    }],

    password: {
        type: String,
        required: [true, 'Password is required'],
    },

    refreshToken: {
        type: String,
        default: null,
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

// Hash password before saving
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    if (this.isNew) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

// Compare passwords
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// Generate Access Token
userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            id: this._id,
            username: this.username,
            email: this.email,
            fullname: this.fullname,
            avatar: this.avatar,
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    );
};

// Generate Refresh Token
userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            id: this._id,
            username: this.username,
            email: this.email,
            fullname: this.fullname,
            avatar: this.avatar,
        },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
    );
};

export const User = mongoose.model("User", userSchema);
