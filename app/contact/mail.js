import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

// Nodemailer configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',  // Your Gmail email
        pass: 'your-password'  // Your Gmail password
    }
});

router.post('/api/register/healthrecord', async (req, res) => {
    try {
        // Your existing code to save the health record to the database
        // ...

        // Send "thank you" email to the user
        const mailOptions = {
            from: 'your-email@gmail.com',  // Your Gmail email
            to: req.body.email,  // Assuming the user's email is submitted in the form
            subject: 'Thank You for Connecting with Swasthya Samruddhi',
            text: `Dear ${req.body.firstName} ${req.body.surName},\n\nThank you for connecting with Swasthya Samruddhi. We have received your health record details and will review it shortly.\n\nBest Regards,\nSwasthya Samruddhi Team`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                res.status(500).json({ message: 'Failed to send email' });
            } else {
                console.log('Email sent: ' + info.response);
                res.status(201).json({ message: 'Health record registered and email sent' });
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to register health record' });
    }
});

export default router;
