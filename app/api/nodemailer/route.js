import { connectMongoDB } from '@/app/libs/connectDb';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Message from '@/app/models/contacts';

export async function POST(req) {
    const data = await req.json();
    console.log(data);

    await connectMongoDB();
    
    const newMessage = new Message(data);
    await newMessage.save();

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
            to: data.email,
            subject: 'Thank You for Connecting with SwasthyaSamruddhi',
            html: `
                <html>
                <head>
                    <style>
                        .container {
                            font-family: Arial, sans-serif;
                            max-width: 600px;
                            margin: 20px auto;
                            padding: 20px;
                            border: 1px solid #ccc;
                            border-radius: 5px;
                            background-color: #f4f4f4;
                        }
                        .header {
                            background-color: #3498db; /* Blue color */
                            color: white;
                            padding: 10px;
                            text-align: center;
                            border-radius: 5px 5px 0 0;
                        }
                        .content {
                            padding: 20px;
                        }
                        .thank-you {
                            text-align: center;
                            font-size: 24px;
                            color: #3498db; /* Blue color */
                        }
                        .footer {
                            text-align: center;
                            margin-top: 20px;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                        <h2>Swasthya Samruddhi</h2>
                            <h3>Your Privacy, Our Promise</h3>
                        </div>
                        <div class="content">
                            <p>Dear ${data.name},</p>
                            <p>Thank you for connecting with <strong>SwasthyaSamruddhi</strong>. We have received your health record details and will review it shortly.</p>
                            <p>Best Regards,<br>Swasthya Samruddhi Team</p>
                        </div>
                        <div class="thank-you">Thank you for connecting with us!</div>
                        <div class="footer">
                            <p>Visit our website: <a href="https://www.swasthyasamruddhi.com">SwasthyaSamruddhi</a></p>
                        </div>
                    </div>
                </body>
                </html>
            `
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                return NextResponse.json({ message: 'Failed to send email' });
            } else {
                console.log('Email sent: ' + info.response);
                return NextResponse.json({ message: "Email sent successfully" });
            }
        });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Email not sent" });
    }
}
