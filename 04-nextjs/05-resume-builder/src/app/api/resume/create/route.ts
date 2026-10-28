import { getCurrentUser } from "@/lib/auth";
import dbConnect from "@/lib/database";
import resumeModel from "@/models/Resume.model";
import { IUser } from "@/types/user.types";
import ApiError from "@/utils/api-error";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const user: IUser | null = await getCurrentUser();

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
          data: null,
          errors: [],
        },
        { status: 401 },
      );
    }

    const resume = await resumeModel.create({
      user: user._id,
      title: "",
      summary: "",
      personalInfo: {},
      workExperience: [],
      projects: [],
      achievements: [],
      certifications: [],
      education: [],
      skills: [],
    });

    console.log(resume);

    return NextResponse.json({
      success: true,
      message: "Resume created successfully",
      data: { resume },
      errors: [],
    });
  } catch (error) {
    console.log(error);
    if (error instanceof ApiError) {
      return NextResponse.json(
        {
          success: error.success,
          statusCode: error.statusCode,
          message: error.message,
          data: error.data,
          errors: error.errors,
        },
        { status: error.statusCode },
      );
    }

    return NextResponse.json(
      {
        success: false,
        statusCode: 500,
        message: "Internal server error",
        data: null,
        errors: [],
      },
      { status: 500 },
    );
  }
}
