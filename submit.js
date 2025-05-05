import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Resend } from 'resend';
import { getFirestore } from 'firebase-admin/firestore';

const router = Router();
const db = getFirestore();
const resend = new Resend(process.env.RESEND_API_KEY);

router.post('/submit', async (req, res) => {
  const { email, link } = req.body;

  if (!email || !link) return res.status(400).json({ message: 'Missing fields.' });

  const token = uuidv4();
  const verifyUrl = `https://yourwebsite.com/verify?token=${token}`;

  await db.collection('submissions').doc(token).set({
    email,
    link,
    token,
    created_at: new Date(),
    verified: false
  });

  await resend.emails.send({
    from: 'noreply@yourdomain.com',
    to: email,
    subject: 'Verify your submission',
    html: `
      <p>Thanks for your submission! Click the link below to verify:</p>
      <a href="${verifyUrl}">${verifyUrl}</a>
    `
  });

  res.status(200).json({ message: '✅ Verification email sent!' });
});
