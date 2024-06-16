# Waver

Welcome to Waver, our social media website! This platform allows users to post content, like and comment on posts, view and interact with profiles, and manage their friend lists. The application is built using ReactJS and Material-UI for the frontend, and NodeJS, ExpressJS, and MongoDB for the backend.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Frontend](#frontend)
- [Backend](#backend)
- [Running the Application](#running-the-application)
- [Contributing](#contributing)
- [License](#license)

## Features
- **User Authentication**: Register and login securely.
- **Post Creation**: Create, edit, and delete posts.
- **Like and Comment**: Like and comment on posts.
- **User Profiles**: View and edit user profiles.
- **Friend Management**: Send friend requests, accept/reject requests, unfriend users.

## Installation

### Prerequisites
- Node.js
- MongoDB
- npm

### Clone the Repository
```sh
git clone https://github.com/sanchiitvijay/waver.git
cd waver
```

## Frontend
Navigate to the `client` directory and install dependencies:
```sh
cd client
npm install
```

### Available Scripts
In the `client` directory, you can run:
- `npm start`: Runs the app in development mode.
- `npm test`: Launches the test runner.
- `npm run build`: Builds the app for production.

### Technologies Used
- **ReactJS**: A JavaScript library for building user interfaces.
- **Material-UI**: A popular React UI framework.

## Backend
Navigate to the `server` directory and install dependencies:
```sh
cd server
npm install
```

### Available Scripts
In the `server` directory, you can run:
- `npm run dev`: Starts the server in development mode.
- `npm test`: Runs tests.

### Technologies Used
- **NodeJS**: A JavaScript runtime built on Chrome's V8 engine.
- **ExpressJS**: A minimal and flexible Node.js web application framework.
- **MongoDB**: A NoSQL database for storing user and post data.

## Running the Application

### Setup Environment Variables
Create a `.env` file in the `server` directory with the following content:
```env
PORT=5000
MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_jwt_secret
```

### Start the Backend Server
```sh
cd server
node index.js
```

### Start the Frontend Server
In a separate terminal, start the frontend server:
```sh
cd client
npm run dev
```

Visit `http://localhost:5173` to view the application in the browser.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Enjoy using Waver! If you have any questions or issues, please open an issue on GitHub.