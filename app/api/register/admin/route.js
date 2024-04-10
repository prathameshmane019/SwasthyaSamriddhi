import { connectMongoDB } from "@/app/libs/connectDb";
import { NextResponse } from "next/server";
import { sendRegistrationEmail } from "../../nodemailer/route";
import Admin from "@/app/models/admin";
export async function POST(req) {
    console.log("Trying")
    try {
        connectMongoDB();
        const admin = await req.json();
        const newAdmin = new Admin(admin)
        await newAdmin.save()

        const name = admin.fullname.firstName+" " + admin.fullname.surName
       
        await sendRegistrationEmail({email:admin.email,id:newAdmin.id,name:name})

        console.log("Admin registered");
    return NextResponse.json({message:"Admin registered"});
        
    } catch (error) {
        console.log(error);
        return NextResponse.json(error);
    }
}