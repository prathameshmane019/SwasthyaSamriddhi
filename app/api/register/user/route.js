import { connectMongoDB } from "@/app/libs/connectDb";
import { NextResponse } from "next/server";
import User from "@/app/models/user";
export async function POST(req) {
    console.log("Trying")
   
    try {
        connectMongoDB();
        const user = await req.json();
        const newUser = new User(user)
        await newUser.save()
        console.log("user registered");
    return NextResponse.json({message:"User registered"});
        
    } catch (error) {
        return NextResponse.json(error);
    }
}