import React from 'react'
import { createContext } from 'react';

function ThemeContext() {
  return (
    <div>ThemeContext</div>
  )
}

export const ThemeContext = createContext('light');
export default ThemeContext