import { connectMongoDB } from "@/app/libs/connectDb";
import { NextResponse } from "next/server";
import Medical from "@/app/models/medical";
export async function GET(req) {
    try {
      connectMongoDB();
  
      const medicals = await Medical.find();
      console.log(medicals);
      if (medicals) {
        return NextResponse.json(medicals);
      } else {
        return NextResponse.error({ status: 404, message: "Medical not found" });
      }
    } catch (error) {
      console.error(error);
      return NextResponse.error({ status: 500, message: "Internal server error" });
    }
  }
  