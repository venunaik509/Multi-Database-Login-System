# Signup/Login Website

A simple signup and login website using Node.js, Express.js, MongoDB (Mongoose), and a basic HTML/CSS/JS frontend.

## Features
- User signup with first name, last name, email, and password
- User login with email and password
- Passwords are hashed using bcrypt
- MongoDB for user data storage
- Success and error messages for all actions
- Simple, user-friendly UI

## How to Run
1. Install dependencies: `npm install`
2. Set up MongoDB (local or Atlas) and update the connection string in `.env`
3. Start the server: `npm start`
4. Open `http://localhost:3000` in your browser

## Project Structure
- `public/` - Frontend HTML, CSS, JS
- `routes/` - Express route handlers
- `models/` - Mongoose models
- `server.js` - Main Express server

---

Replace any placeholder values as needed (e.g., MongoDB connection string).
