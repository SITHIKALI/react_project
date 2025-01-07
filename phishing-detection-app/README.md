# Phishing Detection Application

This project is a phishing detection application that utilizes a React frontend and a Node.js backend. The application allows users to submit URLs for analysis, leveraging an AI model to predict the likelihood of phishing.

## Project Structure

```
phishing-detection-app
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── models
│   │   ├── routes
│   │   ├── services
│   │   └── app.js
│   ├── package.json
│   └── README.md
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── App.js
│   │   ├── index.js
│   │   └── App.css
│   ├── package.json
│   └── README.md
├── .gitignore
└── README.md
```

## Features

- User-friendly interface for URL submission.
- AI model integration for phishing detection.
- MongoDB for data storage and retrieval.
- RESTful API for backend communication.

## Getting Started

### Prerequisites

- Node.js
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd phishing-detection-app
   ```

2. Set up the backend:
   ```
   cd backend
   npm install
   ```

3. Set up the frontend:
   ```
   cd frontend
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   npm start
   ```

2. Start the frontend application:
   ```
   cd frontend
   npm start
   ```

## API Endpoints

- `POST /api/urls`: Submit a URL for phishing detection.
- `GET /api/urls/:id`: Retrieve results for a submitted URL.

## License

This project is licensed under the MIT License.