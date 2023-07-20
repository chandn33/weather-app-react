import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div class="container">
      
      <Weather defaultCity="Leicester" />
    
    <footer>
    Open-source on {""}
      <a href="https://github.com/chandn33/react-weather-app" target="_blank" rel="noopener noreferrer">
        GitHub</a> | Project designed by Chandni Patel🌻
    </footer>
    </div>
    </div>
  );
}