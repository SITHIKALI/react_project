import React, { useState } from 'react';
import axios from 'axios';

const UrlForm = () => {
    const [url, setUrl] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        
        try {
            const response = await axios.post('/api/urls', { url });
            setResult(response.data);
        } catch (err) {
            setError('Error processing the URL. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Phishing Detection</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter URL"
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Processing...' : 'Submit'}
                </button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {result && (
                <div>
                    <h3>Result:</h3>
                    <p>{result.isPhishing ? 'This URL is likely a phishing site.' : 'This URL is safe.'}</p>
                </div>
            )}
        </div>
    );
};

export default UrlForm;