import { connectMongoDB } from "@/app/libs/connectDb";
import { NextResponse } from "next/server";
import Doctor from "@/app/models/doctor";
export async function POST(req) {
    try {
        console.log("Trying")
        connectMongoDB();
        const id = await req.json();
        const doctor = await Doctor.findOne({ _id: id });
        console.log(doctor);
        return NextResponse.json(doctor);
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({error});
    }
}