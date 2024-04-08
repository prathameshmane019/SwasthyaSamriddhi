import { connectMongoDB } from "@/app/libs/connectDb";
import { NextResponse } from "next/server";
import Medical from "@/app/models/medical";
import { sendRegistrationEmail } from "../../nodemailer/route";


export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      await connectMongoDB();

      const medicals = await Medical.find();

      if (medicals.length > 0) {
        const medicalList = medicals.map((medical) => ({
          id: medical._id,
          name: `${medical.fullname.firstName} ${medical.fullname.middleName ? medical.fullname.middleName + ' ' : ''}${medical.fullname.surName}`,
          email: medical.email,
          mobile: medical.mobile,
          specialization: medical.specialization,
        }));

        return res.status(200).json(medicalList);
      } else {
        return res.status(404).json({ message: "Medical(s) not found" });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  if (req.method === 'POST') {
    try {
      await connectMongoDB();
      const medicalData = await req.json();
      const newMedical = new Medical(medicalData);
      await newMedical.save();
      await sendRegistrationEmail({ email: medicalData.email, name: medicalData.fullname.firstName });

      console.log("Medical registered successfully:", newMedical);
      return NextResponse.json(res, { message: "Medical registered", medical: newMedical });
    } catch (error) {
      console.error(error);
      return NextResponse.json(res, { error });
    }
  }

  return res.status(405).end(); // Method Not Allowed
}
