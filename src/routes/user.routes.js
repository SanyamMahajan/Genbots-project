import { Router } from "express";
import { 
  registerUser, 
  loginUser, 
  logoutUser, 
  requestRoleUpgrade 
} from "../controller/auth.controller.js";

import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { isAdmin, approveOrRejectRole } from "../middlewares/role.middleware.js";  // 👉 Correct import here!!

const router = Router();

// 🔹 Register User
router.post("/register", 
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
  ]), 
  registerUser
);

// 🔹 Login User
router.post("/login", loginUser);

// 🔹 Logout User (Protected)
router.post("/logout", verifyJWT, logoutUser);

// 🔹 Request Role Upgrade (User wants to be a Mentor/Investor)
router.post("/request-role", verifyJWT, requestRoleUpgrade);

// 🔹 Approve/Reject Role Requests (Only Admin can approve/reject)
router.post("/approve-role", verifyJWT, isAdmin, approveOrRejectRole);

export default router;
