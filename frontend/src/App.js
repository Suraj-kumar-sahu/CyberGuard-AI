import React from 'react';
import Scanner from './pages/Scanner';
import MalwareAnalyzer from './pages/MalwareAnalyzer';
import DataBreachChecker from './pages/DataBreachChecker';

function App() {
  return (
    <div>
      <h1>Cybersecurity Tools</h1>
      <Scanner />
      <MalwareAnalyzer />
      <DataBreachChecker />
    </div>
  );
}

export default App;
