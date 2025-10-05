const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Allow frontend domain
const FRONTEND_URL = "https://axdox-front.onrender.com";

app.use(cors({
  origin: FRONTEND_URL,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Handle preflight requests
app.options('*', cors());

app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, phone, service, message } = req.body;

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const name = `${firstName} ${lastName}`;

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtppro.zoho.in',
      port: 587,
      secure: false,
      auth: {
        user: 'support@axdox.in',
        pass: 'axdox@2025',
      },
    });

    await transporter.sendMail({
      from: `"${name}" <'support@axdox.in'}>`,
      replyTo: email,
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
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
});

app.get('/', (req, res) => res.send('Axdox Backend Running!'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
