# Phishing Detection App - Backend

This is the backend part of the Phishing Detection Application. It is built using Node.js and Express.js, and it integrates with a MongoDB database to store URL data and AI model results.

## Project Structure

- **src/**: Contains the source code for the backend application.
  - **controllers/**: Contains the request handling logic.
    - `index.js`: Exports functions for handling URL submissions and AI model processing.
  - **models/**: Contains Mongoose schemas.
    - `Url.js`: Defines the schema for storing URL data.
  - **routes/**: Contains route definitions for the API.
    - `index.js`: Exports the API routes.
  - **services/**: Contains business logic and integrations.
    - `aiModel.js`: Functions for integrating with the TensorFlow.js model.
  - `app.js`: Entry point of the application, sets up the Express server.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory:
   ```
   cd phishing-detection-app/backend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the backend server, run:
```
npm start
```

The server will run on `http://localhost:5000` by default.

## API Endpoints

- `POST /api/urls`: Submit a URL for phishing detection.
- `GET /api/urls/:id`: Retrieve results for a submitted URL.

## Database

This application uses MongoDB for data storage. Make sure to set up your MongoDB database and update the connection string in the environment variables.

## AI Model

The backend integrates with a TensorFlow.js model to analyze submitted URLs and predict the likelihood of phishing.

## License

This project is licensed under the MIT License.