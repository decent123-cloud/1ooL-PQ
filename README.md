# Authentication Application

A full-stack web application with user authentication, registration, and login functionality.

## Features

- User registration with validation
- Secure login system
- User session management
- Responsive frontend interface
- RESTful backend API

## Project Structure

```
├── client/              # Frontend files
│   ├── index.html
│   ├── script.js
│   └── style.css
├── server/              # Backend server
│   ├── app.js
│   ├── index.js
│   ├── user.js
│   ├── routes/
│   │   └── auth.js
│   └── models/
│       └── User.js
├── login.html           # Login page
├── register.html        # Registration page
└── package.json         # Project dependencies
```

## Installation

### Prerequisites

- Node.js (v12 or higher)
- npm

### Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd 1ooL-PQ
```

2. Install dependencies:

```bash
npm install
cd server && npm install && cd ..
```

3. Start the server:

```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## Usage

- **Register**: Create a new account on the registration page
- **Login**: Sign in with your credentials
- **Dashboard**: Access your account after successful login

## API Endpoints

- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login user
- `GET /auth/logout` - Logout user

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (configured in User model)

## License

MIT

## Author

Your Name
