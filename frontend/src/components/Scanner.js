import React, { useState } from 'react';

function Scanner() {
  const [url, setUrl] = useState('');
  const [results, setResults] = useState(null);

  const handleScan = async () => {
    const response = await fetch('/api/scanner', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url })
    });
    const data = await response.json();
    setResults(data.vulnerabilities);
  };

  return (
    <div>
      <h2>Vulnerability Scanner</h2>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL"
      />
      <button onClick={handleScan}>Scan</button>
      {results && (
        <div>
          <h3>Results:</h3>
          <ul>
            {results.map((vuln, index) => (
              <li key={index}>{vuln}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Scanner;
