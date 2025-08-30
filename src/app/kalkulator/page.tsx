"use client";

import { useState } from "react";

export default function CalculatorPage() {
  const [digit1, setDigit1] = useState<number | null>(null);
  const [digit2, setDigit2] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [result, setResult] = useState<number | null>(null);

  const handleNumber = (num: number) => {
    if (digit1 === null) {
        
      setDigit1(num);
    } else if (operator && digit2 === null) {
      setDigit2(num);
    }
  };

  const handleOperator = (op: string) => {
    if (digit1 !== null && operator === null) {
      setOperator(op);
    }
  };

  const handleEqual = () => {
    if (digit1 !== null && digit2 !== null && operator) {
      let res = operator === "+" ? digit1 + digit2 : digit1 - digit2;
      setResult(res);
    }
  };

  const handleClear = () => {
    setDigit1(null);
    setDigit2(null);
    setOperator(null);
    
    setResult(null);
  };

  return (
    <div className="p-5 text-center">
      <h1 className="text-xl mb-4">Kalkulator</h1>

      <div className="border p-3 mb-3 w-40 mx-auto text-lg font-mono">
        {result !== null
          ? result
          : '${digit1 ?? ""} ${operator ?? ""} ${digit2 ?? ""}'}
      </div>

      <div className="grid grid-cols-3 gap-2 w-40 mx-auto mb-3">
        {[1,2,3,4,5,6,7,8,9].map((n) => (
          <button
            key={n}
            onClick={() => handleNumber(n)}
            className="border p-2 rounded"
          >
            {n}
          </button>
        ))}
      </div>

      <div className="flex justify-center gap-2 mb-3">
        <button onClick={() => handleOperator("+")} className="border p-2 rounded">+</button>
        <button onClick={() => handleOperator("-")} className="border p-2 rounded">-</button>
      </div>

      <div className="flex justify-center gap-2">
        <button onClick={handleEqual} className="border p-2 rounded">=</button>
        <button onClick={handleClear} className="border p-2 rounded">C</button>
      </div>
    </div>
  );
}



// Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
// npx create-next-app@latest magangmandiri2