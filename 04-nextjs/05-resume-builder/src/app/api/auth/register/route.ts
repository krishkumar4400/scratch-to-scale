import { generateHash } from "@/lib/bcrypt";
import dbConnect from "@/lib/database";
import { generateJWTToken } from "@/lib/jwt";
import userModel from "@/models/User.model";
import { RegisterBody, userRoles } from "@/types/user.types.ts";
import ApiError from "@/utils/api-error.ts";
import ApiResponse from "@/utils/api-response";
import { registerSchema } from "@/validators/auth.validator";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const body = await req.json();
    const result = registerSchema.safeParse(body);

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

    const { name, email, password }: RegisterBody = result.data;
    console.log({ name, email, password });
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      throw new ApiError(409, "Email already exists");
    }

    const hash: string = await generateHash(password);

    const user = await userModel.create({
      name,
      email,
      password: hash,
      role: userRoles.USER,
    });

    const token = await generateJWTToken({ userId: user._id });

    const cookieStore = await cookies();
    cookieStore.set("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    return NextResponse.json(
      new ApiResponse(201, user, "User has been registered successfully"),
      {
        status: 201,
      },
    );
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
          success: false,
        },
        {
          status: 500,
        },
      );
    }

    return NextResponse.json({
      message: "Internal server error",
      success: false,
    });
  }
}
