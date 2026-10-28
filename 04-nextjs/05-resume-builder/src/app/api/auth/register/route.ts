import { generateHash } from "@/lib/bcrypt";
import dbConnect from "@/lib/database.ts";
import { generateJWTToken } from "@/lib/jwt.ts";
import userModel from "@/models/User.model.ts";
import { ApiResponses } from "@/types/api.types.ts";
import { IUser, RegisterBody, userRoles } from "@/types/user.types.ts";
import ApiError from "@/utils/api-error.ts";
// import ApiResponse from "@/utils/api-response.ts";
import { registerSchema } from "@/validators/auth.validator.ts";
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
    const existingUser: IUser | null = await userModel.findOne({ email });

    if (existingUser) {
      throw new ApiError(409, "Email already exists");
    }

    const hash: string = await generateHash(password);

    const user: IUser = await userModel.create({
      name,
      email,
      password: hash,
      role: userRoles.USER,
    });

    const token: string = generateJWTToken({ userId: user._id.toString() });

    const cookieStore = await cookies();

    cookieStore.set("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    return NextResponse.json<ApiResponses<IUser>>({
      message: "",
      success: false,
      data: user,
      errors: null,
    }, {
      status: 201
    });

    // return NextResponse.json(
    //   new ApiResponse(201, user, "User has been registered successfully"),
    //   {
    //     status: 201,
    //   },
    // );
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
