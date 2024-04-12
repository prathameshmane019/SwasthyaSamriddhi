import { uploadImage } from "@/app/libs/uploadImage";
import { NextResponse } from "next/server";



export async function POST(req, res) {
  try {
    const formData = await req.formData();
    const image = formData.get("image")
    console.log(image);
   const data = await uploadImage(image,'records')
   console.log(data);
    return NextResponse.json({ message: "Upload successful" });
  } catch (error) {
    console.error("Error uploading files:", error);
    return NextResponse.error(error);
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
