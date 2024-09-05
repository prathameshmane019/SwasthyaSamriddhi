import { connectMongoDB } from "@/app/libs/connectDb";
import { NextResponse } from "next/server";
import { sendRegistrationEmail } from "../../nodemailer/route";
import Admin from "@/app/models/admin";
import bcrypt from 'bcrypt';

export async function POST(req) {
    console.log("Trying")
    try {
        // Connect to MongoDB
        await connectMongoDB();
        
        // Parse the admin data from the request
        const admin = await req.json();
        
        // Hash the password
        const hashPassword = await bcrypt.hash(admin.password, 10);
        
        // Create new Admin instance with hashed password
        const newAdmin = new Admin({ ...admin, password: hashPassword });
        
        // Save new Admin to the database
        await newAdmin.save();

        // Construct full name
        const name = `${admin.fullname.firstName} ${admin.fullname.surName}`;
       
        // Send registration email
        await sendRegistrationEmail({ email: admin.email, id: newAdmin.id, name: name });

        console.log("Admin registered");
        
        // Return success response
        return NextResponse.json({ message: "Admin registered" });
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "An error occurred during registration" }, { status: 500 });
    }
}
