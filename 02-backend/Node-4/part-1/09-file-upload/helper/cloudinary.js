import cloudinary from "../configs/cloudinary.js";

const uploadToCloudinary = async (filePath) => {
  try {
    const response = await cloudinary.uploader.upload(filePath);
    return {
      url: response.secure_url,
      publicId: response.public_id,
    };
  } catch (error) {
    console.log(error.message);
  }
};

export default uploadToCloudinary;
