import React, { useState } from "react";

export default function DateCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleIncreaseStep() {
    setStep((s) => s + 1);
  }

  function handleDecreaseStep() {
    setStep((s) => s - 1);
  }

  function handleIncreaseCount() {
    setCount((c) => c + step);
  }

  function handleDecreaseCount() {
    setCount((c) => c - step);
  }

  return (
    <div className="max-w-[500px] mx-auto mt-20">
      <div className="flex gap-4 mb-4">
        <button
          className="bg-gray-200 w-8 h-8 flex items-center justify-center"
          onClick={handleDecreaseStep}
        >
          -
        </button>
        <p>Step: {step}</p>
        <button
          className="bg-gray-200 w-8 h-8 flex items-center justify-center"
          onClick={handleIncreaseStep}
        >
          +
        </button>
      </div>
      <div className="flex gap-4 mb-4">
        <button
          className="bg-gray-200 w-8 h-8 flex items-center justify-center"
          onClick={handleDecreaseCount}
        >
          -
        </button>
        <p>Count: {count}</p>
        <button
          className="bg-gray-200 w-8 h-8 flex items-center justify-center"
          onClick={handleIncreaseCount}
        >
          +
        </button>
      </div>
      <p>
        {count === 0
          ? "Today is"
          : count < 0
          ? `${count} days ago it was`
          : `${count} days from today`}{" "}
        {date.toDateString()}
      </p>
    </div>
  );
}
