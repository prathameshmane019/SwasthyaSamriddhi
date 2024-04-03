import { connectMongoDB } from "@/app/libs/connectDb";
import { NextResponse } from "next/server";
import Message from "@/app/models/contacts";
import { sendContactUsReply } from "../nodemailer/route";
export async function POST(req) {
    try {

        await connectMongoDB();
        const data = await req.json();
        const newMessage = new Message(data);
        await newMessage.save();
        await sendContactUsReply(data)
        console.log("Request send Successfully");
        return NextResponse.json({message:"request send"});
    } catch (error) {
        console.log(error);
        return NextResponse.json({error});
    }
}