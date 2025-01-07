# Phishing Detection App - Frontend

This is the frontend part of the Phishing Detection App, built using React. The application allows users to input URLs and check for phishing threats using an AI model integrated into the backend.

## Project Structure

- **public/**: Contains the static files for the React application.
  - **index.html**: The main HTML file that serves as the entry point for the application.

- **src/**: Contains the source code for the React application.
  - **components/**: Contains React components used in the application.
    - **UrlForm.js**: A component that provides a form for users to input URLs.
  - **App.js**: The main component that sets up the application structure.
  - **index.js**: The entry point for the React application, rendering the App component.
  - **App.css**: Contains the CSS styles for the application.

## Getting Started

To get started with the frontend application, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd phishing-detection-app/frontend
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   npm start
   ```

The application will be available at `http://localhost:3000`.

## API Integration

The frontend communicates with the backend API to submit URLs and retrieve results. Ensure that the backend server is running before using the frontend application.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.