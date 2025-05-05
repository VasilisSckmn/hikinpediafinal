const express = require('express');
const nodemailer = require('nodemailer');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

const tokenStore = new Map(); // In-memory token storage

// Generate Ethereal test account and transporter
let transporterPromise = nodemailer.createTestAccount().then(testAccount => {
  return nodemailer.createTransport({
    host: testAccount.smtp.host,
    port: testAccount.smtp.port,
    secure: testAccount.smtp.secure,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass
    }
  });
});

router.post('/submit', async (req, res) => {
  const { email, link } = req.body;

  if (!email || !link) {
    return res.status(400).json({ message: 'Email and link are required.' });
  }

  const token = uuidv4();
  const verifyUrl = `http://localhost:3000/verify?token=${token}`;

  tokenStore.set(token, { email, link, verified: false });

  const transporter = await transporterPromise;

  const mailOptions = {
    from: `"Link Submission" <${transporter.options.auth.user}>`,
    to: email,
    subject: 'Verify your submission',
    html: `
      <p>Thank you for your submission!</p>
      <p>Please click below to verify your link:</p>
      <a href="${verifyUrl}">${verifyUrl}</a>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('📩 Preview URL:', nodemailer.getTestMessageUrl(info)); // ✅ For testing
    res.status(200).json({ message: 'Verification email sent! (Test email only)' });
  } catch (err) {
    console.error('Email send error:', err);
    res.status(500).json({ message: 'Failed to send verification email.' });
  }
});

router.get('/verify', (req, res) => {
  const { token } = req.query;
  const record = tokenStore.get(token);

  if (!record) {
    return res.status(400).send('Invalid or expired token.');
  }

  if (record.verified) {
    return res.send('Link already verified.');
  }

  record.verified = true;
  tokenStore.set(token, record);

  res.send('✅ Link verified! Thank you.');
});

module.exports = router;
