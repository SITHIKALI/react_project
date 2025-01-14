from flask import Flask, request, jsonify

app = Flask(__name__)

def is_phishing_url(url):
    # Simple heuristic-based approach to detect phishing URLs
    phishing_keywords = ['login', 'verify', 'update', 'secure', 'account']
    return any(keyword in url for keyword in phishing_keywords)

@app.route('/check-url', methods=['POST'])
def check_url():
    data = request.get_json()
    url = data.get('url')
    if not url:
        return jsonify({'error': 'URL is required'}), 400

    result = 'Phishing detected' if is_phishing_url(url) else 'Safe URL'
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
