import React from 'react'
import { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function ThemeChild() {
  const theme = useContext(ThemeContext);

  return (
    <div >
      <p>მიმდინარე თემა კონტექსტიდან: <strong>{theme}</strong></p>
    </div>
  );
}

export default function ThemeParent() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ margin: '10px 0', padding: '15px', border: '1px solid #2196F3' }}>
        <h3>3.3 React Context-ის დემო</h3>
        <button onClick={toggleTheme}>თემის შეცვლა (Light / Dark)</button>
        <br /><br />
        <ThemeChild />
      </div>
    </ThemeContext.Provider>
  );
}
