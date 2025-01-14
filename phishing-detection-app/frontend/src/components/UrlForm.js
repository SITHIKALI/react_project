import React, { useState } from 'react';
import axios from 'axios';

const UrlForm = () => {
    const [url, setUrl] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5001/check-url', { url });
            setResult(response.data.result);
            setError(null);
        } catch (error) {
            setError('Error processing the URL. Please try again.');
            setResult(null);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter URL"
                />
                <button type="submit">Check URL</button>
            </form>
            {result && <div>{result}</div>}
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
    );
};

export default UrlForm;