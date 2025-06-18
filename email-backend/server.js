const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

// CORS Middleware
app.use(cors({
  origin: '*', // You can restrict this to your frontend domain for production
}));
app.use(express.json());

// Route for contact form
app.post('/api/contact', async (req, res) => {
  console.log('Received a contact form request');
  const { name, email, phone, service, message } = req.body;

  // Create transporter with Zoho SMTP settings
  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.in',
    port: 465,
    secure: true, // use SSL
    auth: {
      user: 'info@lunotech.in',       // your Zoho email
      pass: 'qRc7zsAscje6'            // your Zoho app password
    }
  });

  // Optional: Verify SMTP connection
  transporter.verify((error, success) => {
    if (error) {
      console.error('SMTP Connection Failed:', error);
    } else {
      console.log('SMTP is ready to send messages');
    }
  });

  // Email message options
  const mailOptions = {
    from: '"Luno Tech" <info@lunotech.in>',
    to: 'info@lunotech.in',
    subject: `New Inquiry: ${service || 'General'}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// Start the server
app.listen(5001, () => {
  console.log('SMTP backend running on http://localhost:5001');
});