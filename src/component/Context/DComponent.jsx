import React from 'react'
import { useState } from 'react'

export default function DComponent() {
  const [count3, setCount3] = useState(0)
  const addCount = () => {
    setCount3((prev) => prev + 1)
  }
  const removeCount = () => {
    setCount3((prev) => prev - 1)
  }
  return (
    <div className="D_component">
      <h1>D component</h1>
      <div>
        <h1>Count: {count3}</h1>
        <button className='btn btn-success m-4' onClick={addCount}>+</button>
        <button className='btn btn-success' onClick={removeCount}>-</button>
      </div>
    </div>
  );
}
