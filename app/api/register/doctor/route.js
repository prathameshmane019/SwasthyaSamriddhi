import { connectMongoDB } from "@/app/libs/connectDb";
import { NextResponse } from "next/server";
import Doctor from "@/app/models/doctor";
import { sendRegistrationEmail } from "../../nodemailer/route";


export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      await connectMongoDB();

      const doctors = await Doctor.find();

      if (doctors.length > 0) {
        const doctorList = doctors.map((doctor) => ({
          id: doctor._id,
          name: `${doctor.fullname.firstName} ${doctor.fullname.middleName ? doctor.fullname.middleName + ' ' : ''}${doctor.fullname.surName}`,
          email: doctor.email,
          mobile: doctor.mobile,
          specialization: doctor.specialization,
        }));

        return res.status(200).json(doctorList);
      } else {
        return res.status(404).json({ message: "Doctor(s) not found" });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  if (req.method === 'POST') {
    try {
      await connectMongoDB();
      const doctorData = await req.json();
      const newDoctor = new Doctor(doctorData);
      await newDoctor.save();
      await sendRegistrationEmail({ email: doctorData.email, name: doctorData.fullname.firstName });

      console.log("Doctor registered successfully:", newDoctor);
      return NextResponse.json(res, { message: "Doctor registered", doctor: newDoctor });
    } catch (error) {
      console.error(error);
      return NextResponse.json(res, { error });
    }
  }

  return res.status(405).end(); // Method Not Allowed
}
