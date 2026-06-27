import { clerkClient } from "@clerk/express";
import { StatusCodeClass } from "svix";

// update role to educator
export const updateRoleToEducator = async (req, res) => {
  try {
    const { userId } = req.auth();

    if(!userId) {
        return res.json({
          message: "Unauthorized",
          success: false
        });
    }

    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        role: "educator",
      },
    });

    res.json({
      message: "You can publish a course now",
      success: true,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: "Something went wrong. Please try again later.",
      success: false,
    });
  }
};

// Add new course
export const addCourse = async (req,res) => {
  try {
    const {courseData} = req.body;
    const imageFile = req.file;
    const educatorId = req.auth();

    if(!imageFile) {
      return res.json({
        message: "Thumbnail not attached",
        success: false 
      });
    }

    const parsedCourseData = await JSON.parse(courseData);
    parsedCourseData.educator = educatorId;

    

  } catch (error) {
    console.error(error);
    return res.json({
      message: "Internal server error",
      success: false 
    });
  }
}