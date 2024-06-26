import dbConnect from "@/utils/dbConnection";
import UserContact from "@/models/userContact";
import { NextResponse } from "next/server";


export async function POST(req, res) {
    try {
        const body = await req.json();
        console.log(body);
        await dbConnect()

        await UserContact.create(body);

        return NextResponse.json(
            {
                message: "Message sent successfully",
            },
            {
                status: 200
            }
        )
    }
    catch (e) {
        return NextResponse.json(
            { message: "Server error, please try again" },
            { status: 500 }
        )
    }
}
