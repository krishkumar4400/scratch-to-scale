import { NextResponse } from "next/server";
import { users } from "../auth/route";


export async function POST(req: Request, res: Response) {
    try {
        const { name, email, age } = await req.json();
        if (!name || !email || !age) {
            return NextResponse.json({
                message: "Missing details",
                success: false
            }, {
                status: 400
            });
        }

        const existingEmail = users.find(user => user.email === email);
        if (existingEmail) {
            return NextResponse.json({
                message: "Email already exists",
                success: false
            }, {
                status: 400
            });
        }

        users.push({
            id: users.length + 1,
            name: name,
            email: email,
            age: age
        });
        console.log(users)

        return NextResponse.json({
            message: "User created successfully",
            success: true
        }, {
            status: 201
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Internal server error",
            success: false
        }, {
            status: 500
        });
    }
}