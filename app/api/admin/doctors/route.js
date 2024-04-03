import { connectMongoDB } from "@/app/libs/connectDb";
import { NextResponse } from "next/server";
import Doctor from "@/app/models/doctor";
export async function GET(req) {
    try {
      connectMongoDB();
  
      const doctors = await Doctor.find();
      console.log(doctors);
      if (doctors) {
        return NextResponse.json(doctors);
      } else {
        return NextResponse.error({ status: 404, message: "Doctor not found" });
      }
    } catch (error) {
      console.error(error);
      return NextResponse.error({ status: 500, message: "Internal server error" });
    }
  }
  