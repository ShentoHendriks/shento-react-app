import React from 'react';
import { useState } from 'react';

function App() {
  const [amountClicked, setAmountClicked] = useState(0);
  const increment = (event) => {
    event.preventDefault();
    setAmountClicked(prevAmount => prevAmount + 1);
  }
  return (
    <>
      <div className='text-4xl mb-4'>Hello there. This is my first React App!</div>
      <div>Amounts clicked: {amountClicked}</div>
      <button className='bg-blue-500 text-white px-2 py-1 cursor-pointer hover:bg-blue-950' onClick={increment}>Click me!</button>
    </>
  )
}

export default App