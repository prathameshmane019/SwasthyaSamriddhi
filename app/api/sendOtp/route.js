import { NextResponse } from "next/server";
import { sendOTPEmail } from "../nodemailer/route";
export async function POST(req) {
    try {
        const data = await req.json();
        console.log(data);
        await sendOTPEmail(data);

        return NextResponse.json({ message: "OTP sent successfully" });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ message: "Failed to send OTP" });
    }
}