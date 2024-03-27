import express from 'express';
import nodemailer from 'nodemailer';
import User from './path-to-your-user-model';  // Import the User model

const router = express.Router();

// Nodemailer configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',  // Your Gmail email
        pass: 'your-password'  // Your Gmail password
    }
});

router.post('/api/register/user', async (req, res) => {
    try {
        // Save the user details to the database
        const newUser = new User(req.body);
        await newUser.save();

        // Send "thank you" email to the user
        const mailOptions = {
            from: 'your-email@gmail.com',  // Your Gmail email
            to: req.body.email,  // Assuming the user's email is submitted in the form
            subject: 'Thank You for Connecting with Swasthya Samruddhi',
            text: `Dear ${req.body.fullname.firstName} ${req.body.fullname.surName},\n\nThank you for registering with Swasthya Samruddhi. We have received your details and will review it shortly.\n\nBest Regards,\nSwasthya Samruddhi Team`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                res.status(500).json({ message: 'Failed to send email' });
            } else {
                console.log('Email sent: ' + info.response);
                res.status(201).json({ message: 'User registered and email sent' });
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to register user' });
    }
});

export default router;
