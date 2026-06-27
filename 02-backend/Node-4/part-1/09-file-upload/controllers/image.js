import uploadToCloudinary from "../helper/cloudinary.js";
import Image from "../Model/image.js";
import fs from 'fs';

export const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(401).josn({
        message: "please select and image",
        success: false,
      });
    }

    // upload to cloudinary
    const {url, publicId} = await uploadToCloudinary(req.file.path);

    // upload the image url and public id along with the uploaded user id in the database
    const image = await Image.create({url, publicId, uploadedBy:req.userId});

    fs.unlinkSync(req.file.path);
    
    return res.status(201).json({
        message: "image uploaded successfully",
        success: true,
        image
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};


export const getAllImages = async(req,res) => {
    try {

      // sorting and pagination
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 5;

      const skip = (page - 1) * limit;

      const sortBy = req.query.sortBy || 'createdAt';
      const sortOrder = req.query.sortOrder === 'asce' ? 1 : -1;

      const totalImages = await Image.countDocuments();

      const totalPages = Math.ceil(totalImages / limit);

      const sortObj = {};
      sortObj[sortBy] = sortOrder;


        const images = await Image.find().sort(sortObj).skip(skip).limit(limit);
        if(images.length == 0) {
            return res.status(404).json({
                message: "not images are available",
                success: false,
                images 
            });
        }

        return res.status(201).json({
            images,
            currentPage: page,
            totalPages,
            totalImages,
            
            success: true
        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            message: error.message,
            success: false 
        });
    }
}


