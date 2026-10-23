import React from 'react'
import { useState, useMemo, useCallback } from 'react';

function OptimizationDemo() {
  const [numbers, setNumbers] = useState([11-20]);
  const [count, setCount] = useState(0); 
  const evenNumbers = useMemo(() => {
    console.log("ხდება ლუწი რიცხვების გაფილტვრა (useMemo)...");
    return numbers.filter((num) => num % 2 === 0);
  }, [numbers]);

  const addNumber = useCallback(() => {
    setNumbers((prevNumbers) => [...prevNumbers, prevNumbers.length + 1]);
  }, []);

  return (
    <div>
      <h3>3.5 ოპტიმიზაციის ჰუკები (useMemo & useCallback)</h3>

      <p>ყველა რიცხვი: {numbers.join(', ')}</p>
      <p><strong>ლუწი რიცხვები (useMemo):</strong> {evenNumbers.join(', ')}</p>

      <button onClick={addNumber}>ახალი რიცხვის დამატება (useCallback)</button>

      <hr />
      <p>სხვა სთეიტი (რე-რენდერის ტესტი): {count}</p>
      <button onClick={() => setCount(count + 1)}>რე-რენდერის გამოწვევა</button>
    </div>
  );
}

export default OptimizationDemo;