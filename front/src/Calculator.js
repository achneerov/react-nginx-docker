import React, { useState } from 'react';

function Calculator() {
    const [number, setNumber] = useState('');
    const [result, setResult] = useState('');

    const calculate = () => {
        fetch('/api/calculate', { // Changed URL to match Nginx configuration
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ number: parseFloat(number) }),
        })
        .then(response => response.json())
        .then(data => {
            setResult("Result: " + data.result);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <div>
            <h1>Simple Calculator</h1>
            <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Enter a number" />
            <button onClick={calculate}>Calculate</button>
            <p>{result}</p>
        </div>
    );
}

export default Calculator;
