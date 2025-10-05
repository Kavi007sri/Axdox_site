// backend/index.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Configure CORS
// Allow requests from your frontend domain in production
const corsOptions = {
  origin:
    process.env.NODE_ENV === "production"
      ? "https://axdox-front.onrender.com" // your deployed frontend URL
      : "*", // allow all origins in development
};
app.use(cors(corsOptions));

// Parse JSON requests
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, phone, service, message } = req.body;

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const name = `${firstName} ${lastName}`;

  try {
    // Configure SMTP transporter
    const transporter = nodemailer.createTransport({
      host: 'smtppro.zoho.in', // Zoho SMTP
      port: 587,                // 465 for SSL, 587 for TLS
      secure: false,            // true for 465, false for 587
      auth: {
        user: process.env.ZOHO_USER || 'support@axdox.in',  // use env variable in production
        pass: process.env.ZOHO_PASS || 'axdox@2025',        // app password recommended
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"${name}" <${process.env.ZOHO_USER || 'support@axdox.in'}>`, // must match authenticated email
      replyTo: email, // user email for replies
      to: process.env.ZOHO_USER || 'support@axdox.in',
      subject: `Contact form submission from ${name}`,
      text:
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        (phone ? `Phone: ${phone}\n` : "") +
        (service ? `Service: ${service}\n` : "") +
        `Message: ${message}`,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
});

// Health check route
app.get('/', (req, res) => {
  res.send('Axdox Contact API is running!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
