"use client";
import { useState, useEffect } from "react";
import Kalkulatorbutton from './kalkulator/kalkulatorbutton/kalkulatorbutton';


type TOperator = "addition" | "subtraction";

const Calculator = () => {
  const [digit1, setDigit1] = useState<number>();
  const [digit2, setDigit2] = useState<number>();
  const [result, setResult] = useState<number>();
  const [operator, setOperator] = useState<TOperator>();

  // Debug, biar keliatan di console
  useEffect(() => {
    console.log("digit1:", digit1, "digit2:", digit2, "result:", result);
  }, [digit1, digit2, result]);

  // Hitung result
  const onResult = () => {
    if (!digit1 || !digit2 || !operator) return;
    let _result = 0;
    if (operator === "addition") {
      _result = digit1 + digit2;
    } else {
      _result = digit1 - digit2;
    }
    setResult(_result);
  };

  return (
    <main className="bg-white text-black w-full h-screen flex flex-col items-center justify-center gap-4">
      {/* Tampilan hasil */}
      <div className="text-3xl mb-4">
        {digit1} {operator === "addition" ? "+" : operator === "subtraction" ? "-" : ""} {digit2}{" "}
        {result !== undefined && <span>= {result}</span>}
      </div>

      {/* Tombol angka */}
      <div className="grid grid-cols-3 gap-2">
        {[...Array(9)].map((_, i) => (
          <CalculatorButton
            key={i + 1}
            onClick={() => {
              const currentDigit = i + 1;
              if (operator === undefined) return setDigit1(currentDigit);
              setDigit2(currentDigit);
            }}
            className="bg-slate-400"
          >
            {i + 1}
          </CalculatorButton>
        ))}
      </div>

      {/* Tombol operator */}
      <div className="flex gap-2 mt-4">
        <CalculatorButton
          onClick={() => setOperator("addition")}
          className="bg-blue-300"
        >
          +
        </CalculatorButton>
        <CalculatorButton
          onClick={() => setOperator("subtraction")}
          className="bg-red-300 text-white"
        >
          -
        </CalculatorButton>
      </div>

      {/* Tombol sama dengan */}
      <CalculatorButton
        onClick={onResult}
        className="bg-green-400 mt-4"
      >
        =
      </CalculatorButton>
    </main>
  );
};

export default Calculator;