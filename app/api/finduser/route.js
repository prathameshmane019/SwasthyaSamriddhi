import { connectMongoDB } from "@/app/libs/connectDb";
import { NextResponse } from "next/server";
import User from "@/app/models/user";
export async function POST(req) {
    console.log("Trying")
   
    try {
        connectMongoDB();
        const id = await req.json();
        const user = await User.findOne({ _id: id });
        await newUser.save()
        console.log("user registered");
    return NextResponse.json({message:"User registered"});
        
    } catch (error) {
        console.log(error);
        return NextResponse.json(error);
    }
}