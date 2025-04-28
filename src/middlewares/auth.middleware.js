import { asyncHandler } from "../utils/asynchHandler.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const verifyJWT = asyncHandler(async (req, res, next) => {
    const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
        return res.status(401).json({
            status: "fail",
            message: "Unauthorized - No token provided",
        });
    }

    // Verify token
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, decoded) => {
        if (err) {
            return res.status(403).json({
                status: "fail",
                message: "Forbidden - Invalid token",
            });
        }

        // Fetch user from DB using decoded user ID
        const user = await User.findById(decoded.id).select("-password -refreshToken");

        if (!user) {
            return res.status(401).json({
                status: "fail",
                message: "Unauthorized - User not found",
            });
        }

        // Attach user to request object
        req.user = user;
        next();
    });
});
   