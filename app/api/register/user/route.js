import { connectMongoDB } from "@/app/libs/connectDb";
import { NextResponse } from "next/server";
import User from "@/app/models/user";
import { sendRegistrationEmail } from "../../nodemailer/route";
export async function POST(req) {
    console.log("Trying")
    try {
        connectMongoDB();
        const user = await req.json();
        const newUser = new User(user)
        await newUser.save()
        const name = user.fullname.firstName+" " + user.fullname.surName
        await sendRegistrationEmail({email:user.email,name:name})
        console.log("user registered");
    return NextResponse.json({message:"User registered"});
        
    } catch (error) {
        console.log(error);
        return NextResponse.json(error);
    }
}