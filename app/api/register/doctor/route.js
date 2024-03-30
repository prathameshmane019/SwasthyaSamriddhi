import { connectMongoDB } from "@/app/libs/connectDb";
import { NextResponse } from "next/server";
import Doctor from "@/app/models/doctor";
export async function POST(req) {
    try {
        connectMongoDB();
        const doctor = await req.json();
        const newDoctor = new Doctor(doctor);
        await newDoctor.save();
        console.log(newDoctor);
        console.log("Doctor registered Successfully");
        return NextResponse.json({message:"Doctor registered"},newDoctor);
    } catch (error) {
        console.log(error);
        return NextResponse.json({error});
    }
}