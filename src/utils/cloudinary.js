import { v2 as cloudinary} from "cloudinary";

import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,        
    api_secret: process.env.CLOUDINARY_API_SECRET,
   
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) {
            const response = await cloudinary.uploader.upload(localFilePath, {
                resource_type: "auto",
                folder: "videos",
                resource_type: "video",
            })
            console.log("Upload successful:", response);
            return response.secure_url; // Return the URL of the uploaded video 
        }
    } catch (error) {
        console.error("Error uploading to Cloudinary:", error);
        throw error;
    } finally {
        // Clean up the local file after upload
        fs.unlinkSync(localFilePath);
    }
}

export { uploadOnCloudinary };


