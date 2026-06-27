import { cookies } from "next/headers";

export async function POST(req: Request) {
    const { data } = await req.json();

    console.log(data);

    const cookieStore = cookies();

    (await cookieStore).set("token", "abc123", {
        httpOnly: true,
        secure: false,
        path: '/',
        maxAge: 60 * 60 // 1 hour
    });

    return Response.json({
        message: "Cookie Set",
        success: true
    });
}

export async function GET() {
    // Read cookie from request
    const cookieStore = cookies();
    const token = (await cookieStore).get("token");

    console.log(token);
    return Response.json({
        token: token?.value
    });
}