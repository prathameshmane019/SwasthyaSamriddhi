import { connectMongoDB } from "@/app/libs/connectDb";
import { NextResponse } from "next/server";
import Doctor from "@/app/models/doctor";
import { sendRegistrationDoctorEmail } from "../../nodemailer/route";
import bcrypt from "bcrypt"; // Added missing bcrypt import

export async function POST(req) {
 
  console.log("Trying");
  try {
    // Connect to MongoDB
    await connectMongoDB();

    // Parse the doctor data from the request
    const doctorData = await req.json();

    // Hash the doctor's password
    const hashPassword = await bcrypt.hash(doctorData.password.trim(), 10);

    console.log(hashPassword);

    console.log(doctorData);

    // Create new Doctor instance with hashed password
    const newDoctor = new Doctor({ ...doctorData, password: hashPassword });

    // Save new doctor to the database
    await newDoctor.save();

    // Construct the full name
    const name = `${doctorData.fullname.firstName} ${doctorData.fullname.surName}`;

    // Send registration email to the doctor
    await sendRegistrationDoctorEmail({
      id: newDoctor._id,
      email: doctorData.email,
      name: name,
    });

    console.log("Doctor registered successfully", newDoctor);

    // Return success response with the new doctor details
    return NextResponse.json({
      message: "Doctor registered",
      doctor: newDoctor,
    });
  } catch (error) {
    console.error(error);

    // Return error response
    return NextResponse.json(
      { error: "An error occurred during registration" },
      { status: 500 }
    );
  }
}
