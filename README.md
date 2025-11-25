🌐 Multi-Database Authentication System

This project is a collection of multiple login and registration systems, each built using a different database and backend technology. The goal of this project is to explore how authentication works across various database environments and understand how different tech stacks handle user data, security, and validation.

By organizing all these systems in one place, this repository acts as a hands-on learning playground that showcases practical experience with MySQL, MongoDB, PostgreSQL, and Firebase Authentication.

📁 Project Overview

The repository contains separate folders, and each one represents a complete authentication module built with a unique database:

multi-db-project/
│
├── DJANGO_FOR_MYSQL/                 # Login & registration built using Django + MySQL
│
├── login-form-firebase/              # Firebase Authentication (Config file removed for security)
│
├── project-form-mongodb/             # Node.js/Express login system using MongoDB
│
├── project-form-postgreSQL/          # User authentication using PostgreSQL
│
└── registration form/                # Basic HTML/CSS/JS registration UI


Each module is independent and demonstrates how authentication is implemented in different environments.

🎯 Project Purpose

The main aim of this project is to understand:

How different databases manage user accounts

How backend frameworks connect and interact with these databases

How login, registration, and validation work behind the scenes

How to structure authentication securely across various stacks

How to handle credentials and sensitive files responsibly

This project was built to strengthen backend development skills and improve understanding of real-world login system architecture.

🛠️ Technologies Used
Frontend

HTML

CSS

JavaScript

Backend / Frameworks

Django (Python)

Node.js & Express.js

Firebase Authentication SDK

Databases

MySQL

MongoDB

PostgreSQL

Firebase Realtime Database / Firestore

🚀 Module Details
1️⃣ Django + MySQL Authentication

Built using the Django framework

Uses MySQL as the relational database

Features registration, login, and input validation

Demonstrates ORM usage and secure password handling

2️⃣ Firebase Authentication

Implements Google Firebase Authentication

Supports secure login/signup with email/password

Firebase configuration is excluded for security reasons

Users must add their own Firebase config file before running

3️⃣ Node.js + MongoDB Login System

Developed with Express.js

Uses MongoDB for storing and managing user data

Includes password hashing, validation, and routing

A great introduction to full-stack JS authentication

4️⃣ PostgreSQL Login System

Authentication built with PostgreSQL as the database

Clean schema, secure queries, and backend integration

Handles user registration and login processes

🔐 Security Notice

To protect sensitive information:

firebaseConfig.json

.env files

Database credentials

API keys

have been intentionally removed from this repository.

Please configure your own credentials before running any module.

▶️ How to Run Each Module
For Django + MySQL
cd DJANGO_FOR_MYSQL
pip install -r requirements.txt
python manage.py runserver

For Node.js + MongoDB
cd project-form-mongodb
npm install
npm start

For Firebase Auth

Open the HTML file in your browser

Add your Firebase configuration in your local environment

For PostgreSQL Module
cd project-form-postgreSQL
npm install
npm start

🏆 What I Learned

Through building these modules, I gained practical knowledge in:

Designing and structuring login systems

Working with multiple databases

Understanding authentication flows

Implementing password security & hashing

Handling credentials safely

Connecting backend frameworks to different database engines

Managing multi-module projects in a clean structure

This project helped strengthen both backend development skills and overall understanding of secure authentication.

📌 Future Enhancements

I plan to extend this project with:

JWT-based authentication

A unified front-end UI for all modules

Redis-based session caching

Docker containerization

Role-based access control (RBAC)

API documentation (Swagger/Postman)

📄 License

This project is meant for educational and demonstration purposes.
Feel free to use or modify the code to support your own learning.
