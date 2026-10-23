import React from 'react'
import { useState, useEffect } from 'react';

function Counter() {
const [count, setCount] = useState(0);
useEffect(() => {
    console.log('loaded successfully');
  }, []);
return (
  <div>
    <h3>მთვლელი (Counter): {count}</h3>
    <button onClick={() => setCount(count + 1)}>გაზრდა (+1)</button>
    <button onClick={() => setCount(count - 1)}>შემცირება (-1)</button>
  </div>
);
}

export default Counter