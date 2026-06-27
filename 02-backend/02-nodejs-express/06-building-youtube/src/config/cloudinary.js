import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log("File uploaded to cloudinary:", response.url);

    // once the file is uploaded, we would like to delete it from our server.
    // cleanup safely
    try {
      fs.unlinkSync(localFilePath);
    } catch (err) {
      console.error("Failed to delete local file:", err);
    }

    return response;
  } catch (error) {
    console.error("Cloudinary upload failed:", error);

    // cleanup safely
    try {
      fs.unlinkSync(localFilePath);
    } catch (err) {
      console.error("Failed to delete local file:", err);
    }

    return null;
  }
};

const deleteFromCloudinary = async (publicId) => {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export { uploadOnCloudinary, deleteFromCloudinary };
