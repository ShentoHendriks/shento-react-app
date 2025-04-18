import React from "react";
import { useState } from "react";

const messages = ["Learn React", "Apply for jobs", "Invest your new income"];

export default function StatePractice() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }
  return (
    <>
      <button className="mt-4 ml-4" onClick={() => setIsOpen((is) => !is)}>X</button>
      {isOpen && <div className="bg-gray-100 p-8 m-8 max-w-[500px]">
        <div className="flex gap-10 justify-center">
          <div
            className={`${
              step >= 1 ? "bg-purple-700 text-white" : "bg-gray-200"
            } p-4 rounded-full w-8 h-8 flex justify-center items-center`}
          >
            1
          </div>
          <div
            className={`${
              step >= 2 ? "bg-purple-700 text-white" : "bg-gray-200"
            } p-4 rounded-full w-8 h-8 flex justify-center items-center`}
          >
            2
          </div>
          <div
            className={`${
              step >= 3 ? "bg-purple-700 text-white" : "bg-gray-200"
            } p-4 rounded-full w-8 h-8 flex justify-center items-center`}
          >
            3
          </div>
        </div>
        <div className="flex flex-col items-center mt-8 gap-8">
          <p>
            Step {step}: {messages[step - 1]}
          </p>
          <div className="flex gap-16">
            <button
              onClick={handlePrevious}
              className="bg-purple-700 text-white px-4 py-2 rounded-full cursor-pointer"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="bg-purple-700 text-white px-4 py-2 rounded-full cursor-pointer"
            >
              Next
            </button>
          </div>
        </div>
      </div>}
    </>
  );
}
