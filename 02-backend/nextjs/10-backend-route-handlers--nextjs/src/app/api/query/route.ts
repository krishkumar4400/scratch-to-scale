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
        name: "krish",
        email: "ashish@gmail.com",
        age: 21
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


export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        console.log(searchParams)
        const age = searchParams.get("age");
        const name = searchParams.get("name");
        console.log(age)
        let user = users;
        if (age) {
            user = users.filter(u => u.age === Number(age));
        }

        if (name) {
            user = users.filter(u => u.name.toLowerCase().includes(name.toLowerCase()));
        }


        console.log(user);
        return NextResponse.json(
            user
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json({
            message: "Internel server error",
            success: false
        });
    }
}