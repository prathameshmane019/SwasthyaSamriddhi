import { connectMongoDB } from "@/app/libs/connectDb";
import { NextResponse } from "next/server";
import Doctor from "@/app/models/doctor";
export async function GET(req) {
    try {
      connectMongoDB();
     const id = req.nextUrl.searchParams.get("id")
        const doctor = await Doctor.findOne({ _id: id });
        console.log(doctor);
        return NextResponse.json(doctor);
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({error});
    }
}