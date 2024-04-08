import { connectMongoDB } from "@/app/libs/connectDb";
import { NextResponse } from "next/server";
import Medical from "@/app/models/medical";
export async function POST(req) {
    try {
      connectMongoDB();
        const {id} = await req.json()
        const medical = await Medical.findOne({ _id: id });
        console.log(medical);
        return NextResponse.json(medical);
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({error});
    }
}