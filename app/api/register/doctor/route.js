import { connectMongoDB } from "@/app/libs/connectDb";
import { NextResponse } from "next/server";
import Doctor from "@/app/models/doctor";
export async function POST(req) {
    console.log("Trying")
    try {
        connectMongoDB();
        const doctor = await req.json();
        const newDoctor = new Doctor(doctor)
        await newDoctor.save()
        console.log("Doctor registered Successfully");
    return NextResponse.json({message:"Doctor registered"},newDoctor);
        
    } catch (error) {
        return NextResponse.json({error});
    }
}