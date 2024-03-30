import { connectMongoDB } from "@/app/libs/connectDb";
import { NextResponse } from "next/server";
import User from "@/app/models/user";
export async function POST(req) {
    try {
        connectMongoDB();
        const id = await req.json();
        const user = await User.findOne({ _id: id });
        console.log(user);
    return NextResponse.json(user);
    } catch (error) {
        console.log(error);
        return NextResponse.json(error);
    }
}