// Express backend for contact form
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
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
      host: 'smtppro.zoho.in',   // your SMTP host
      port: 587,               // 465 for SSL, 587 for TLS
      secure: false,           // true for port 465, false for 587
      auth: {
        user: 'support@axdox.in',
        pass: 'axdox@2025',   // your email password or app password
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"${name}" <support@axdox.in>`, // must match authenticated email
      replyTo: email,                        // user's email for replies
      to: 'support@axdox.in',
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
    console.error('Error sending email:', error); // log full error
    res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
