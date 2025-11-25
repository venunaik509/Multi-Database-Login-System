# Project Form: Simple Signup/Login Website

## Features
- Signup and login forms (HTML/CSS/JS)
- Node.js + Express.js backend
- PostgreSQL database for user data
- Passwords hashed with bcrypt
- User-friendly success/error messages

## Getting Started

### 1. Database Setup
- Create a PostgreSQL database (e.g., `projectformdb`).
- Update `backend/.env` with your DB credentials.
- Run the SQL in `backend/init.sql` to create the `users` table.

### 2. Backend Setup
```
cd backend
npm install
npm start
```

### 3. Frontend
- Open `frontend/signup.html` or `frontend/login.html` in your browser.

## Notes
- Backend runs on port 5000 by default.
- Frontend expects backend at `http://localhost:5000`.
- For production, serve frontend via Express or a static server.
