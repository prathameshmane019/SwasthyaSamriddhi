import express from 'express';
import nodemailer from 'nodemailer';
import Doctor from './path-to-your-doctor-model';  // Import the Doctor model

const router = express.Router();

// Nodemailer configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',  // Your Gmail email
        pass: 'your-password'  // Your Gmail password
    }
});

router.post('/api/register/doctor', async (req, res) => {
    try {
        // Save the doctor details to the database
        const newDoctor = new Doctor(req.body);
        await newDoctor.save();

        // Send "thank you" email to the doctor
        const mailOptions = {
            from: 'your-email@gmail.com',  // Your Gmail email
            to: req.body.email,  // Assuming the doctor's email is submitted in the form
            subject: 'Thank You for Connecting with Swasthya Samruddhi',
            text: `Dear Dr. ${req.body.fullname.firstName} ${req.body.fullname.surName},\n\nThank you for registering with Swasthya Samruddhi. You have successfully registered as a doctor on our platform.\n\nBest Regards,\nSwasthya Samruddhi Team`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                res.status(500).json({ message: 'Failed to send email' });
            } else {
                console.log('Email sent: ' + info.response);
                res.status(201).json({ message: 'Doctor registered and email sent' });
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to register doctor' });
    }
});

export default router;
