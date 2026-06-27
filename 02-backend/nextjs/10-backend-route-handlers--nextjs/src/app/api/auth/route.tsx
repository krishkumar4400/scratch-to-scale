import { NextResponse } from "next/server";

export const users = [
  {
    id: 1,
    name: "krish",
    email: "krish@gmail.com",
    age: 21
  },
  {
    id: 2,
    name: "ashish",
    email: "ashish@gmail.com",
    age: 22
  },
  {
    id: 3,
    name: "raj",
    email: "raj@gmail.com",
    age: 24
  },
  {
    id: 4,
    name: "rahul",
    email: "rahul@gmail.com",
    age: 18
  },
];

export async function GET(req: Request, res: Response) {
  try {
    return NextResponse.json({
      users,
      totalUsers: users.length,
      success: true,
    },{
      status:200
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "Internal server error",
      success: false
    }, {
      status: 500,
    }
  );
  }
}