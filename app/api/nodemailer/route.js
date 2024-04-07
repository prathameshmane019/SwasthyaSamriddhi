import nodemailer from 'nodemailer';
async function sendEmail(data, subject, htmlContent) {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'maneprathamesh019@gmail.com',
                pass: 'ppmn ujpq uivu ovzg'
            }
        });

        const mailOptions = {
            from: 'SwasthyaSamriddhi Team',
            to: data.email,
            subject: subject,
            html: htmlContent
        };

        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

export async function sendRegistrationEmail(data) {
    const subject = 'Welcome to SwasthyaSamriddhi';
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Secure Health Management</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f5f5f5;
                color: #333333;
            }
    
            .container {
                max-width: 600px;
                margin: auto;
                padding: 20px;
                background-color: #ffffff;
                border-radius: 10px;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            }
    
            .header {
                background-color: #38761d;
                padding: 20px;
                text-align: center;
                border-radius: 10px 10px 0 0;
                color: #ffffff;
            }
    
            .logo img {
                max-width: 100px;
                height: auto;
            }
    
            .content {
                padding: 20px;
            }
    
            .content h1,
            .content h2 {
                color: #6aa84f;
            }
    
            .footer {
                text-align: center;
                padding-top: 20px;
                color: #888888;
            }
    
            .illustration img {
                display: block;
                margin: auto;
                max-width: 100%;
                height: auto;
                margin-top: 20px;
            }
        </style>
    </head>
    
    <body>
        <div class="container">
            <div class="header">
                <div class="logo">
                    <img src="https://eictdfu.stripocdn.email/content/guids/7bbde248-d214-40aa-9269-60756a26ac48/images/swasthya_logo1.png" alt="Logo">
                </div>
                <h3>Swasthya Samriddhi</h3>
            </div>
            <div class="content">
                <h1>Welcome to Secure Health Management</h1>
                <p>Your Privacy, Our Promise</p>
                <h2 style="font-size: 16px;">Dear ${data.name},</h2>
                <p>Thank you for registering with SwasthyaSamriddhi. We are excited to have you onboard!</p>
                <p>Best Regards,<br>SwasthyaSamriddhi Team</p>
            </div>
            <div class="illustration">
            <img class="adapt-img" src="https://eictdfu.stripocdn.email/content/guids/7bbde248-d214-40aa-9269-60756a26ac48/images/college_entrance_examcuate.png" alt="" style="display: block;" width="208">
            </div>
            <div class="footer">
                <p>&copy; 2024 Swasthya Samriddhi. All rights reserved.</p>
            </div>
        </div>
    </body>
    
    </html>
    `;
    await sendEmail(data, subject, htmlContent);
}

export async function sendHealthRecordAddedEmail(data) {
    const subject = 'New Health Record Added';
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Health Record Added</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f5f5f5;
                color: #333333;
            }
    
            .container {
                max-width: 600px;
                margin: auto;
                padding: 20px;
                background-color: #ffffff;
                border-radius: 10px;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            }
    
            .header {
                background-color: #38761d;
                padding: 20px;
                text-align: center;
                border-radius: 10px 10px 0 0;
                color: #ffffff;
            }
    
            .logo img {
                max-width: 100px;
                height: auto;
            }
    
            .content {
                padding: 20px;
            }
    
            .content h1,
            .content h2 {
                color: #6aa84f;
            }
    
            .footer {
                text-align: center;
                padding-top: 20px;
                color: #888888;
            }
    
            .illustration img {
                display: block;
                margin: auto;
                max-width: 100%;
                height: auto;
                margin-top: 20px;
            }
        </style>
    </head>
    
    <body>
        <div class="container">
            <div class="header">
                <div class="logo">
                    <img src="https://eictdfu.stripocdn.email/content/guids/7bbde248-d214-40aa-9269-60756a26ac48/images/swasthya_logo1.png" alt="Logo">
                </div>
                <h3>Swasthya Samriddhi</h3>
            </div>
            <div class="content">
                <h1>New Health Record Added Successfully</h1>
                <p>Your Privacy, Our Promise</p>
                <h2 style="font-size: 16px;">Dear ${data.name},</h2>
                <p>New health record added !!</p>

                <p>"Take care and  We hope you feel better soon." </p>
                <p>Best Regards,<br>SwasthyaSamriddhi Team</p>
            </div>
            <div class="illustration">
            <img class="adapt-img" src="https://eictdfu.stripocdn.email/content/guids/7bbde248-d214-40aa-9269-60756a26ac48/images/college_entrance_examcuate.png" alt="" style="display: block;" width="208">
            </div>
            <div class="footer">
                <p>&copy; 2024 Swasthya Samriddhi. All rights reserved.</p>
            </div>
        </div>
    </body>
    
    </html>
    `;
    await sendEmail(data, subject, htmlContent);
}

export async function sendContactUsReply(data) {
    const subject = 'Thank You for Contacting SwasthyaSamriddhi';
    const htmlContent = `
         <!DOCTYPE html>
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You for Contacting SwasthyaSamriddhi</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f5f5f5;
                color: #333333;
            }
    
            .container {
                max-width: 600px;
                margin: auto;
                padding: 20px;
                background-color: #ffffff;
                border-radius: 10px;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            }
    
            .header {
                background-color: #38761d;
                padding: 20px;
                text-align: center;
                border-radius: 10px 10px 0 0;
                color: #ffffff;
            }
    
            .logo img {
                max-width: 100px;
                height: auto;
            }
    
            .content {
                padding: 20px;
            }
    
            .content h1,
            .content h2 {
                color: #6aa84f;
            }
    
            .footer {
                text-align: center;
                padding-top: 20px;
                color: #888888;
            }
    
            .illustration img {
                display: block;
                margin: auto;
                max-width: 100%;
                height: auto;
                margin-top: 20px;
            }
        </style>
    </head>
    
    <body>
        <div class="container">
            <div class="header">
                <div class="logo">
                    <img src="https://eictdfu.stripocdn.email/content/guids/7bbde248-d214-40aa-9269-60756a26ac48/images/swasthya_logo1.png" alt="Logo">
                </div>
                <h3>Swasthya Samriddhi</h3>
            </div>
            <div class="content">
                <h1>Thank You for Contacting SwasthyaSamriddhi</h1>
                <p>Your Privacy, Our Promise</p>
                <h2 style="font-size: 16px;">Dear ${data.name},</h2>
                <p>We have received your message and will get back to you shortly</p>
                <p>Best Regards,<br>SwasthyaSamriddhi Team</p>
            </div>
            <div class="illustration">
            <img class="adapt-img" src="https://eictdfu.stripocdn.email/content/guids/7bbde248-d214-40aa-9269-60756a26ac48/images/college_entrance_examcuate.png" alt="" style="display: block;" width="208">
            </div>
            <div class="footer">
                <p>&copy; 2024 Swasthya Samriddhi. All rights reserved.</p>
            </div>
        </div>
    </body>
    
    </html>
    `;
    await sendEmail(data, subject, htmlContent);
}



export async function sendOTPEmail(data) {
    const subject = 'One-Time Password (OTP) for Verification';
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>TOne-Time Password (OTP) for Verification</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f5f5f5;
                color: #333333;
            }
    
            .container {
                max-width: 600px;
                margin: auto;
                padding: 20px;
                background-color: #ffffff;
                border-radius: 10px;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            }
    
            .header {
                background-color: #38761d;
                padding: 20px;
                text-align: center;
                border-radius: 10px 10px 0 0;
                color: #ffffff;
            }
    
            .logo img {
                max-width: 100px;
                height: auto;
            }
    
            .content {
                padding: 20px;
            }
    
            .content h1,
            .content h2 {
                color: #6aa84f;
            }
    
            .footer {
                text-align: center;
                padding-top: 20px;
                color: #888888;
            }
    
            .illustration img {
                display: block;
                margin: auto;
                max-width: 100%;
                height: auto;
                margin-top: 20px;
            }
        </style>
    </head>
    
    <body>
        <div class="container">
            <div class="header">
                <div class="logo">
                    <img src="https://eictdfu.stripocdn.email/content/guids/7bbde248-d214-40aa-9269-60756a26ac48/images/swasthya_logo1.png" alt="Logo">
                </div>
                <h3>Swasthya Samriddhi</h3>
            </div>
            <div class="content">
                <h1>One-Time Password (OTP) for Verification</h1>
                <p>Your Privacy, Our Promise</p>
                <h2 style="font-size: 16px;">Dear ${data.name},</h2>
                <p style="font-size: 16px;">Your One-Time Password (OTP) for verification is: <strong>${data.otp}</strong></p>
                <p style="font-size: 16px;">Please use this OTP to verify your account.</p>
                <p style="font-size: 16px;">This OTP is valid for a single use and expires after a certain period of time.</p>
                <p style="font-size: 16px;">Best Regards,<br/>Sawasthya Samriddhi Team</p
            </div>
            <div class="illustration">
            <img class="adapt-img" src="https://eictdfu.stripocdn.email/content/guids/7bbde248-d214-40aa-9269-60756a26ac48/images/college_entrance_examcuate.png" alt="" style="display: block;" width="208">
            </div>
            <div class="footer">
                <p>&copy; 2024 Swasthya Samriddhi. All rights reserved.</p>
            </div>
        </div>
    </body>
    
    </html>
    `;
    await sendEmail(data, subject, htmlContent);
}