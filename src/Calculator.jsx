import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
  if (value === '=') {
    try {
      if (input.trim() === '' || /[+\-*/]$/.test(input)) {
        setResult('Incomplete');
      } else {
        setResult(eval(input));
      }
    } catch {
      setResult('Error');
    }
  } else if (value === 'C') {
    setInput('');
    setResult('');
  } else {
    setInput(input + value);
  }
};

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <input type="text" value={input} readOnly />
      <div className="result">{result}</div>
      <div className="buttons">
        {['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', 'C', '0', '=', '/'].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
 