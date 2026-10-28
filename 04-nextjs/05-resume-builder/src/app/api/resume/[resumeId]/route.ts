import { getCurrentUser } from "@/lib/auth.ts";
import dbConnect from "@/lib/database.ts";
import resumeModel from "@/models/Resume.model.ts";
import { IResume } from "@/types/resume.types.ts";
import { IUser } from "@/types/user.types.ts";
import { NextRequest, NextResponse } from "next/server";

type RouteContext = {
  params: Promise<{ resumeId: string }>;
};

export async function GET(req: NextRequest, { params }: RouteContext) {
  try {
    const { resumeId } = await params;
    console.log({ resumeId });

    await dbConnect();

    const user: IUser | null = await getCurrentUser();
    const resume: IResume | null = await resumeModel.findOne({
      _id: resumeId,
      user: user?._id,
    });

    console.log(resume);

    if (!resume) {
      return NextResponse.json(
        {
          message: "You are not allowed to access this resume",
          success: false,
        },
        {
          status: 403,
        },
      );
    }

    return NextResponse.json({
      message: "Resume fetched successfully",
      success: true,
      resumeId,
      resume,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Error while fetching resume",
        success: false,
        error,
      },
      {
        status: 500,
      },
    );
  }
}

export async function PATCH(req: NextRequest, { params }: RouteContext) {
  try {
    const { resumeId } = await params;
    const body = await req.json();

    await dbConnect();

    const user: IUser | null = await getCurrentUser();
    const resume: IResume | null = await resumeModel.findOneAndUpdate(
      {
        _id: resumeId,
        user: user?._id,
      },
      {
        $set: body,
      },
      {
        returnDocument: "after",
        runValidators: true,
      },
    );

    console.log(resume);

    if (!resume) {
      return NextResponse.json(
        {
          message: "Failed to update this resume",
          success: false,
        },
        {
          status: 400,
        },
      );
    }

    return NextResponse.json({
      message: "Resume updated successfully",
      success: true,
      resumeId,
      resume,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Error while updating resume",
        success: false,
        error,
      },
      {
        status: 500,
      },
    );
  }
}
