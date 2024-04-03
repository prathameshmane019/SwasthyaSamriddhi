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
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; border-radius: 8px; background-color: #f8f8f8;">
            <div style="background-color: #4CAF50; padding: 10px; border-radius: 8px 8px 0 0; color: white; font-size: 24px; text-align: center;">Welcome to SwasthyaSamriddhi</div>
            <div style="padding: 20px;">
                <p style="font-size: 16px;">Dear ${data.name},</p>
                <p style="font-size: 16px;">Thank you for registering with SwasthyaSamriddhi. We are excited to have you onboard!</p>
                <p style="font-size: 16px;">Best Regards,<br/>SwasthyaSamriddhi Team</p>
            </div>
        </div>
    `;
    await sendEmail(data, subject, htmlContent);
}

export async function sendHealthRecordAddedEmail(data) {
    const subject = 'New Health Record Added';
    const htmlContent = `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; border-radius: 8px; background-color: #f8f8f8;">
            <div style="background-color: #4CAF50; padding: 10px; border-radius: 8px 8px 0 0; color: white; font-size: 24px; text-align: center;">New Health Record Added</div>
            <div style="padding: 20px;">
                <p style="font-size: 16px;">Dear ${data.name},</p>
                <p style="font-size: 16px;">We have successfully added your new health record. Thank you for providing the details!</p>
                <p style="font-size: 16px;">Best Regards,<br/>SwasthyaSamriddhi Team</p>
            </div>
        </div>
    `;
    await sendEmail(data, subject, htmlContent);
}

export async function sendContactUsReply(data) {
    const subject = 'Thank You for Contacting SwasthyaSamriddhi';
    const htmlContent = `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; border-radius: 8px; background-color: #f8f8f8;">
            <div style="background-color: #4CAF50; padding: 10px; border-radius: 8px 8px 0 0; color: white; font-size: 24px; text-align: center;">Thank You for Contacting SwasthyaSamriddhi</div>
            <div style="padding: 20px;">
                <p style="font-size: 16px;">Dear ${data.name},</p>
                <p style="font-size: 16px;">We have received your message and will get back to you shortly.</p>
                <p style="font-size: 16px;">Best Regards,<br/>SwasthyaSamriddhi Team</p>
            </div>
        </div>
    `;
    await sendEmail(data, subject, htmlContent);
}
export async function sendOTPEmail(data) {
    const subject = 'One-Time Password (OTP) for Verification';
    const htmlContent = `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; border-radius: 8px; background-color: #f8f8f8;">
            <div style="background-color: #4CAF50; padding: 10px; border-radius: 8px 8px 0 0; color: white; font-size: 24px; text-align: center;">One-Time Password (OTP) for Verification</div>
            <div style="padding: 20px;">
                <p style="font-size: 16px;">Dear ${data.name},</p>
                <p style="font-size: 16px;">Your One-Time Password (OTP) for verification is: <strong>${otp}</strong></p>
                <p style="font-size: 16px;">Please use this OTP to verify your account.</p>
                <p style="font-size: 16px;">This OTP is valid for a single use and expires after a certain period of time.</p>
                <p style="font-size: 16px;">Best Regards,<br/>Your Application Team</p>
            </div>
        </div>
    `;
    await sendEmail(data, subject, htmlContent);
}