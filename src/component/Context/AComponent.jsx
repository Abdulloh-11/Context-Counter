import React from 'react'
import { useState } from "react";

export default function AComponent() {
  const [count, setCount] = useState(0);
  const addCount = () => {
    setCount((prev) => prev + 1);
  };
  const removeCount = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div className="A_component">
      <h1>A component</h1>
      <div>
        <h1>Count: {count}</h1>
        <button className='btn btn-success m-4' onClick={addCount}>+</button>
        <button className='btn btn-success' onClick={removeCount}>-</button>
      </div>
    </div>
  );
}
