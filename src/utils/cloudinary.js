import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file

import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath, folder) => {
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
      folder,
    });

    console.log("Upload successful:", response);
    return response; // or return response.secure_url if you only need the URL
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    throw error;
  } finally {
    // Clean up local file after upload
    try {
      fs.unlinkSync(localFilePath);
    } catch (err) {
      console.error("Error deleting file:", err.message);
    }
  }
};

export { uploadOnCloudinary };
