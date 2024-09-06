import { connectMongoDB } from "@/app/libs/connectDb";
import { NextResponse } from "next/server";
import User from "@/app/models/user";
import { sendRegistrationEmail } from "../../nodemailer/route";
import bcrypt from 'bcrypt'
export async function POST(req) {
    console.log("Trying")
    try {
        connectMongoDB();
        const user = await req.json();
        const hashPassword = await bcrypt.hash(user.password,10)
        
        const newUser = new User({...user,password:hashPassword})
        await newUser.save()

        const name = user.fullname.firstName+" " + user.fullname.surName
       
        await sendRegistrationEmail({email:user.email,id:newUser.id,name:name})

        console.log("user registered");
    return NextResponse.json({message:"User registered"});
        
    } catch (error) {
        console.log(error);
        return NextResponse.json(error);
    }
}