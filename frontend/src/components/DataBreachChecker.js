import React, { useState } from 'react';

function DataBreachChecker() {
  const [email, setEmail] = useState('');
  const [breachResult, setBreachResult] = useState(null);

  const handleCheck = async () => {
    const response = await fetch('/api/breach/check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    });
    const data = await response.json();
    setBreachResult(data);
  };

  return (
    <div>
      <h2>Data Breach Checker</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <button onClick={handleCheck}>Check</button>
      {breachResult && <pre>{JSON.stringify(breachResult, null, 2)}</pre>}
    </div>
  );
}

export default DataBreachChecker;
