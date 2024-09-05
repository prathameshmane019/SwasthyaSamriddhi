import { connectMongoDB } from "@/app/libs/connectDb";
import { NextResponse } from "next/server";
import Doctor from "@/app/models/doctor";
import { sendRegistrationDoctorEmail } from "../../nodemailer/route";

export async function POST(req) {
    console.log("Trying")
    try {
      await connectMongoDB();
      const doctorData = await req.json();

      console.log(doctorData);
      
      const newDoctor = new Doctor(doctorData);
      await newDoctor.save();

      const name = doctorData.firstName + " " + doctorData.surName;
     
      await sendRegistrationDoctorEmail({ id:newDoctor._id,email: doctorData.email, name: name});

      console.log("Doctor registered successfully ", newDoctor);
      return NextResponse.json( { message: "Doctor registered", doctor: newDoctor });
    } catch (error) {
      console.error(error);
      return NextResponse.json(res, { error });
    }
}