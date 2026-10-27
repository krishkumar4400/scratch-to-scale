import { comparePassword } from "@/lib/bcrypt";
import dbConnect from "@/lib/database";
import { generateJWTToken } from "@/lib/jwt";
import userModel from "@/models/User.model";
import { LoginBody, User } from "@/types/user.types.ts";
import ApiError from "@/utils/api-error";
import ApiResponse from "@/utils/api-response";
import { loginSchema } from "@/validators/auth.validator";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const body: unknown = await req.json();
    const result = loginSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          statusCode: 400,
          message: "Validation failed",
          data: null,
          errors: result.error.issues.map((issue) => ({
            field: issue.path.join("."),
            message: issue.message,
          })),
        },
        { status: 400 },
      );
    }

    const { email, password }: LoginBody = result.data;
    console.log({ email, password });

    const user: User | null = await userModel
      .findOne({ email })
      .select("+password");

    if (!user) {
      throw new ApiError(401, "incorrect email or password");
    }

    const isPasswordMatch: boolean = await comparePassword({
      password,
      hash: user.password,
    });

    if (!isPasswordMatch) {
      throw new ApiError(401, "incorrect email or password");
    }

    const token: string = generateJWTToken({ userId: user._id });
    const cookieStore = await cookies();
    cookieStore.set("token", token);

    return NextResponse.json(
      new ApiResponse(200, user, "User has been loggedin successfully"),
      { status: 200 },
    );
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
