// frontend/src/index.js
import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleCalculate = async () => {
    try {
      const response = await fetch('/api/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input: inputValue }),
      });
      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      console.error('Error calculating:', error);
    }
  };

  return (
    <div>
      <h1>Simple Calculator</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleCalculate}>Calculate</button>
      {result && <p>Result: {result}</p>}
    </div>
  );
}

export default App;
