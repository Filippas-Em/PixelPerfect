const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors'); // If you installed CORS
const multer = require('multer'); // If you installed Multer


const app = express();
app.use(cors());
app.use(express.json()); // Add this line to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Add this line to parse URL-encoded bodies

const upload = multer();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
    service: 'gmail', // Specify the email service provider
    auth: {
        user: 'emmanouil.filippas@gmail.com', // Your email address
        pass: 'apsa lmbk kbhb ixcr' // Your email password
    },
    tls: {
        rejectUnauthorized: false 
    }
});


    // Define email content
    const mailOptions = {
        from: 'emmanouil.filippas@gmail.com',
        to: "emmanouil.filippas@gmail.com",
        subject: 'Subject of your email',
        text: `Hello ${name},\n\n${message}`,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ success: false, error: 'An error occurred while sending the email' });
        } else {
            console.log('Email sent:', info.response);
            res.status(200).json({ success: true, message: 'Email sent successfully' });
        }
    });
});
