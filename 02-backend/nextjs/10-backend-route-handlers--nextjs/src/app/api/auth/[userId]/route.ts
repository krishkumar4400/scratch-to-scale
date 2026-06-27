import { NextResponse } from "next/server";
import { users } from "../route";


export async function GET(req: Request, { params }: any) {
    try {
        const { userId } = await params;
        const user = users.find(u => u.id === parseInt(userId));

        if (!user) {
            return NextResponse.json({
                message: "User id is incorrect",
                success: false
            });
        }

        return NextResponse.json(user, {
            status: 200
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({
            message: "Internal server error",
            success: false
        }, {
            status: 500
        });
    }
}

export async function PUT(req: Request, { params }: any) {
    try {
        const { userId } = await params;

        const id = parseInt(userId);

        const { name, email, age } = await req.json();
        console.log(name, email, age)

        const userIndex = users.findIndex(user => user.id === id);

        if (userIndex === -1) {
            return NextResponse.json({
                message: "user not found",
                success: true
            }, {
                status: 404
            });
        }

        console.log(users[userIndex]);
        // users[userIndex].name = name;
        // users[userIndex].email = email;
        // users[userIndex].age = age;

        users[userIndex] = {
            id,
            name,
            email,
            age
        };
        console.log(users[userIndex]);

        return NextResponse.json({
            message: "User data up",
            success: true,
            user: users[userIndex]
        }, {
            status: 200
        });


    } catch (error) {
        console.error(error);
        return NextResponse.json({
            message: "Internal server error",
            success: false
        }, {
            status: 500
        });
    }
}

export async function PATCH(req: Request, { params }: any) {
    try {
        const { userId } = await params;
        const id = parseInt(userId);

        const body = await req.json();

        const userIndex = users.findIndex(user => user.id === id);

        if (userIndex === -1) {
            return NextResponse.json({
                message: "User not found",
                success: false
            }, {
                status: 404
            });
        }

        users[userIndex] = {
            ...users[userIndex],
            ...body,
        }

        return NextResponse.json({
            message: "Name updates successfully",
            success: true,
            user: users[userIndex]
        }, {
            status: 200
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json({
            message: "Internal server error",
            success: false
        }, {
            status: 500
        });
    }
}


export async function DELETE(req: Request, { params }: any) {
    try {
        const { userId } = await params;
        const id = Number(userId);

        if (isNaN(id)) {
            return NextResponse.json({
                message: "Invalid user ID",
                success: false
            }, { status: 400 });
        }

        const existingUser = users.find(user => user.id === id);

        if (!existingUser) {
            return NextResponse.json({
                message: "User not found",
                success: false
            }, { status: 404 });
        }
        // console.log(existingUser);

        // 🔥 actual delete
        // const updatedUsers = users.filter(user => user.id !== id);

        // return NextResponse.json({
        //     message: "User deleted successfully",
        //     success: true,
        //     users: updatedUsers
        // }, { status: 200 });



        const userIndex = users.findIndex(user => user.id === id);
        const deletedUser = users[userIndex];

        users.splice(1, userIndex);
        console.log(users);
        console.log(deletedUser);

        return NextResponse.json({
            message: "User deleted successfully",
            success: true,
            deletedUser,
            users
        }, {
            status: 200
        });

    } catch (error) {
        console.error(error);

        return NextResponse.json({
            message: "Internal server error",
            success: false
        }, { status: 500 });
    }
}