**Multi-Database Authentication System**

This repository contains multiple authentication and registration modules, each built using a different database and backend technology. The goal of this project is to understand how login systems work across different database environments and how backend frameworks integrate with them.

**Project Structure**
multi-db-project/
│
├── DJANGO_FOR_MYSQL/                 # Authentication using Django + MySQL
│
├── login-form-firebase/              # Firebase Authentication (config file removed for security)
│
├── project-form-mongodb/             # Login system built with Node.js + MongoDB
│
├── project-form-postgreSQL/          # Login & registration using PostgreSQL
│
└── registration form/                # Basic HTML/CSS/JS registration UI

**Purpose of the Project**

1.This project was created to explore and understand:

2.How different databases store and manage user information

3.How backend technologies connect with relational and non-relational databases

4.How authentication flows differ across stacks

5.How to implement secure login and registration systems

6.How to manage credentials and sensitive files safely


**Technologies Used**
**Frontend**

HTML

CSS

JavaScript

**Backend**

Django (Python)

Node.js and Express.js

Firebase Authentication

**Databases**

MySQL

MongoDB

PostgreSQL

Firebase Firestore / Realtime Database

**Module Descriptions**
**Django + MySQL**

A complete user authentication system built using Django’s built-in auth system and MySQL. It includes user registration, login, validation, and secure password storage.

**Firebase Authentication**

Implements Firebase’s email/password authentication. The Firebase configuration file is intentionally removed for security reasons and must be added manually by the user.

**Node.js + MongoDB**

A backend built with Express.js and connected to MongoDB. It handles user registration, login, password hashing, and form validation.

**PostgreSQL Login System**

A Node.js-based authentication module using PostgreSQL as the database. This includes secure queries and schema design.

**Security Notice**

Sensitive files such as:

firebaseConfig.json

.env files

API keys

Database credentials

are not included in this repository to ensure security.
Users must provide their own configuration before running any module.
