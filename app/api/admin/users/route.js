import { connectMongoDB } from "@/app/libs/connectDb";
import { NextResponse } from "next/server";
import User from "@/app/models/user";
export async function GET(req) {
    try {
      connectMongoDB();
  
      const user = await User.find();
      console.log(user);
      if (user) {
        return NextResponse.json(user);
      } else {
        return NextResponse.error({ status: 404, message: "User not found" });
      }
    } catch (error) {
      console.error(error);
      return NextResponse.error({ status: 500, message: "Internal server error" });
    }
  }
  