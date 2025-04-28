import { asyncHandler } from "../utils/asynchHandler.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";

// Generate tokens
const generateAccessANDRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    console.error("Error generating tokens:", error);
    throw new ApiError(500, "Internal Server Error");
  }
};

// Register User
const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, username, password } = req.body;

  if (!fullName || !email || !username || !password) {
    throw new ApiError(400, "All fields are required");
  }

  const existingUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existingUser) {
    throw new ApiError(409, "User already exists with this username or email");
  }

  const avatarLocalPath = req.files?.avatar?.[0]?.path;
  const coverImageLocalPath = req.files?.coverImage?.[0]?.path;

  if (!avatarLocalPath || !coverImageLocalPath) {
    throw new ApiError(400, "Please upload both avatar and cover image");
  }

  const avatar = await uploadOnCloudinary(
    avatarLocalPath,
    "VisionaryHub/avatars"
  );
  const coverImage = await uploadOnCloudinary(
    coverImageLocalPath,
    "VisionaryHub/coverImages"
  );

  if (!avatar || !coverImage) {
    throw new ApiError(500, "Image upload to Cloudinary failed");
  }

  const user = await User.create({
    fullName,
    email,
    username: username.toLowerCase(),
    password,
    avatar: avatar.secure_url,
    coverImage: coverImage.secure_url,
    role: "user", // Default role is 'user'
    watchHistory: [],
  });

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  return res.status(201).json(
    new ApiResponse(201, "User created successfully", {
      user: createdUser,
    })
  );  
});

// Login User
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, "Please provide username or email and password");
  }

  const user = await User.findOne({
    email,
  });

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  const isPasswordCorrect = user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new ApiError(401, "Invalid credentials");
  }

  const { accessToken, refreshToken } = await generateAccessANDRefreshToken(
    user._id
  );
  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  const options = {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
  };

  return res
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .status(200)
    .json(
      new ApiResponse(200, "User logged in successfully", {
        user: loggedInUser,
        accessToken,
        refreshToken,
        role: user.role,
      })
    );
});

// Logout User
const logoutUser = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  if (!userId) {
    throw new ApiError(400, "User ID is required");
  }

  const user = await User.findByIdAndUpdate(
    userId,
    { refreshToken: undefined },
    { new: true }
  ).select("-password -refreshToken");

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  res.clearCookie("accessToken");
  res.clearCookie("refreshToken");

  return res.status(200).json(
    new ApiResponse(200, "User logged out successfully", {
      user,
    })
  );
});

// Request Role Upgrade
const requestRoleUpgrade = asyncHandler(async (req, res) => {
  const { userId, requestedRole } = req.body; // requestedRole = "mentor" or "investor"

  if (!userId || !requestedRole) {
    throw new ApiError(400, "User ID and requested role are required");
  }

  const user = await User.findById(userId);
  if (!user) {
    throw new ApiError(404, "User not found");
  }

  if (user.role !== "user") {
    throw new ApiError(400, "Only users can request role upgrade");
  }

  user.requestedRole = requestedRole;
  await user.save();

  return res.status(200).json(
    new ApiResponse(200, "Role upgrade request submitted successfully", {
      requestedRole,
    })
  );
});

// Admin Approve/Reject Role Request
const handleRoleRequest = asyncHandler(async (req, res) => {
  const { userId, approve } = req.body; // approve = true or false

  if (!userId) {
    throw new ApiError(400, "User ID is required");
  }

  const user = await User.findById(userId);
  if (!user) {
    throw new ApiError(404, "User not found");
  }

  if (!user.requestedRole) {
    throw new ApiError(400, "No role upgrade request found for this user");
  }

  if (approve) {
    user.role = user.requestedRole;
  }
  user.requestedRole = undefined;
  await user.save();

  return res.status(200).json(
    new ApiResponse(
      200,
      approve ? "Role upgrade approved" : "Role upgrade rejected",
      {
        user,
      }
    )
  );
});

export {
  registerUser,
  loginUser,
  logoutUser,
  requestRoleUpgrade,
  handleRoleRequest,
};
