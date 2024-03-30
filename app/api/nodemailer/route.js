import { connectMongoDB } from '@/app/libs/connectDb';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Message from '@/app/models/contacts';
export async function POST(req) {
    const data = await req.json();
console.log(data);
await connectMongoDB();
const newMessage = new Message(data)
await newMessage.save()
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'maneprathamesh019@gmail.com',  
        pass: 'ppmn ujpq uivu ovzg' 
    }
});
    try {
        const mailOptions = {
            from: 'maneprathamesh019@gmail.com',  
            to: data.email,  // Assuming the user's email is submitted in the form
            subject: 'Thank You for Connecting with Swasthya Samruddhi',
            text: `Dear ${data.name},\n\nThank you for connecting with Swasthya Samruddhi. We have received your health record details and will review it shortly.\n\nBest Regards,\nSwasthya Samruddhi Team`
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                res.status(500).json({ message: 'Failed to send email' });
            } else {
                console.log('Email sent: ' + info.response);
                return NextResponse.json({ message: "email sent Succesfully" });
            }
        });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "email not send" });
    }
}