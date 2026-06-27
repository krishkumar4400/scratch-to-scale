import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {

        // console.log(req.headers);

        // // access request headers
        // const requestHeaders = new Headers(req.headers);
        // console.log(requestHeaders);
        // const authToken = requestHeaders.get('authorization');
        // console.log(authToken)
        // return NextResponse.json({
        //     message: "Hello"
        // });

        const headerList = await headers();
        const authToken = headerList.get('authorization');
        console.log(authToken);

        // return new Response("<h1>Hello Next.Js</h1>", {
        //     headers: {
        //         "content-type": "text/html",
        //         "custom-headers":"my-custom-header"
        //     }
        // });

        const response = NextResponse.json({ message: "Hello with headers" });

        response.headers.set("X-powered-by", "Next-js-16");
        response.headers.set("cache-control", "no-store");

        return response;

    } catch (error) {
        console.error(error);
        return NextResponse.json({
            message: "Internel server error",
            success: false
        });
    }
}