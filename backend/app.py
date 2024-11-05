from flask import Flask, request, jsonify
from services.scanner_service import scan_vulnerabilities
from services.malware_service import analyze_malware
from services.breach_service import check_breach

app = Flask(__name__)

@app.route('/api/scanner', methods=['POST'])
def scanner():
    data = request.get_json()
    url = data['url']
    vulnerabilities = scan_vulnerabilities(url)
    return jsonify({'vulnerabilities': vulnerabilities})

@app.route('/api/malware/analyze', methods=['POST'])
def malware_analyze():
    file = request.files['file']
    result = analyze_malware(file)
    return jsonify(result)

@app.route('/api/breach/check', methods=['POST'])
def breach_check():
    data = request.get_json()
    email = data['email']
    result = check_breach(email)
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
