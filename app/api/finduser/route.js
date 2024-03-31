import { connectMongoDB } from "@/app/libs/connectDb";
import { NextResponse } from "next/server";
import User from "@/app/models/user";
export async function POST(req) {
    try {
      connectMongoDB();
      const {id}=req.json()
      if (!id) {
        return NextResponse.error({ status: 400, message: "ID parameter is missing" });
      }
  
      console.log(id);
      const user = await User.findOne({ _id: id });
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
  