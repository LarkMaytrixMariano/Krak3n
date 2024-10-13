// pages/api/send-email.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, message } = req.body;

    // Create a transporter using your email service and credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your-email@gmail.com', // replace with your email
        pass: 'your-email-password',  // replace with your email password
      },
    });

    // Email options
    const mailOptions = {
      from: email,
      to: 'your-email@gmail.com', // where you want to receive the emails
      subject: 'New Message from Contact Form',
      text: message,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
