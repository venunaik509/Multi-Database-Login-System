

const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');

const serviceAccount = require('./firebaseConfig.json');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: 'https://login-form-7ee39.firebaseio.com',
});

const db = admin.firestore();
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Health check
app.get('/', (req, res) => res.send('API running'));

// Signup endpoint
app.post('/signup', async (req, res) => {
	const { firstName, lastName, email, password } = req.body;
	if (!firstName || !lastName || !email || !password) {
		return res.status(400).json({ message: 'All fields are required.' });
	}
	try {
		// Check if email already exists in Firebase Auth
		let userRecord;
		try {
			userRecord = await admin.auth().getUserByEmail(email);
			return res.status(400).json({ message: 'Email already registered.' });
		} catch (err) {
			// Not found, continue
		}
		// Create user in Firebase Auth
		const user = await admin.auth().createUser({
			email,
			password,
			displayName: `${firstName} ${lastName}`,
		});
		// Save user details in Firestore
		await db.collection('users').doc(user.uid).set({
			firstName,
			lastName,
			email,
			createdAt: admin.firestore.FieldValue.serverTimestamp(),
		});
		res.json({ message: 'Signup successful.' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// Login endpoint
app.post('/login', async (req, res) => {
	const { email, password } = req.body;
	if (!email || !password) {
		return res.status(400).json({ message: 'Email and password required.' });
	}
	try {
		// Firebase Admin SDK does not support password verification directly
		// In production, use Firebase Auth client SDK on frontend
		// Here, for demo, use Firebase Auth REST API
		const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
		const apiKey = 'AIzaSyDmzteHR9DPNUJqNrV0utBJEUtbzn5b7_0'; // TODO: Replace with your Firebase Web API Key
		const resp = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, password, returnSecureToken: true })
			});
		const data = await resp.json();
		if (data.error) {
			return res.status(401).json({ message: 'Invalid email or password.' });
		}
		// Get user details from Firestore
		const userDoc = await db.collection('users').where('email', '==', email).get();
		if (userDoc.empty) {
			return res.status(404).json({ message: 'User not found.' });
		}
		const userData = userDoc.docs[0].data();
		res.json({ message: 'Login successful.', firstName: userData.firstName, lastName: userData.lastName });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

