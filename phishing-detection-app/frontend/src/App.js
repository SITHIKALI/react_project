import React, { useState } from 'react';
import UrlForm from './components/UrlForm';
import './App.css';

function App() {
  const [result, setResult] = useState(null);

  const handleResult = (data) => {
    setResult(data);
  };

  return (
    <div className="App">
      <h1>Phishing Detection App</h1>
      <UrlForm onResult={handleResult} />
      {result && (
        <div className="result">
          <h2>Result:</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}

export default App;