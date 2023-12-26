import React from 'react'
import { useState } from 'react';

export default function CComponent() {
  const [count2, setCount2] = useState(0)
  const addCount = () => {
    setCount2((prev) => prev + 1);
  };
  const removeCount = () => {
    setCount2((prev) => prev - 1);
  };
  return (
    <div className="C_component">
      <h1>C component</h1>
      <div>
        <h1>Count {count2}</h1>
        <button className='btn btn-success m-4' onClick={addCount}>+</button>
        <button className='btn btn-success' onClick={removeCount}>-</button>
      </div>
    </div>
  );
}
