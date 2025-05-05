import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Resend } from 'resend';
import admin from 'firebase-admin';

const router = Router();

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://your-firebase-database-url.firebaseio.com',
});

const db = admin.firestore(); // Initialize Firestore
const resend = new Resend(process.env.RESEND_API_KEY); // Initialize Resend with your API Key

router.post('/submit', async (req, res) => {
  const { email, link } = req.body;

  if (!email || !link) return res.status(400).json({ message: 'Missing fields.' });

  const token = uuidv4();
  const verifyUrl = `https://your-site.com/verify.html?token=${token}`;

  // Store the submission in Firestore with the verification status
  await db.collection('submissions').doc(token).set({
    email,
    link,
    token,
    created_at: new Date(),
    verified: false,
  });

  // Send a verification email via Resend service
  await resend.emails.send({
    from: 'noreply@your-domain.com',  // Make sure to use a valid email
    to: email,
    subject: 'Verify your link submission',
    html: `
      <p>Click below to verify your submission:</p>
      <a href="${verifyUrl}">${verifyUrl}</a>
    `,
  });

  res.status(200).json({ message: '✅ Email sent. Check your inbox!' });
});

router.get('/verify', async (req, res) => {
  const token = req.query.token;

  if (!token) return res.status(400).json({ message: 'Missing token.' });

  // Retrieve the document from Firestore using the token
  const docRef = db.collection('submissions').doc(token);
  const doc = await docRef.get();

  if (!doc.exists) return res.status(404).json({ message: 'Invalid or expired token.' });

  if (doc.data().verified) {
    return res.json({ message: 'This submission is already verified.' });
  }

  // Update the Firestore document to mark it as verified
  await docRef.update({ verified: true });

  return res.json({ message: '✅ Submission verified successfully!' });
});

export default router;
