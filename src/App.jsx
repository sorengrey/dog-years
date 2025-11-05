import React, { useState } from "react";
import dogphoto from "./dog-photo.png";
import "./App.css";

function calculateDogAgeFromYears(dogYears) {
  if (typeof dogYears !== "number" || dogYears < 0) {
    return 0;
  }

  if (dogYears === 1) {
    return 15;
  }

  if (dogYears === 2) {
    return 24;
  }

  if (dogYears > 2) {
    let humanYears = 24;
    const remainingYears = dogYears - 2;
    humanYears += remainingYears * 4;
    return humanYears;
  }

  return 0;
}

export default function App() {
  const [years, setYears] = useState('');
  const [humanAge, setHumanAge] = useState(null);

const handleYearChange = (event) => {
    const inputValue = event.target.value;
    
    // Check if the input is empty string or a valid number.
    // If empty, set years to '', allowing the field to look clear.
    if (inputValue === '') {
        setYears('');
        // Optional: Also clear the result when the input is cleared
        setHumanAge(null); 
    } else {
        // Convert to number, ensuring it's not less than 0
        const newYears = Math.max(0, parseInt(inputValue, 10) || 0);
        setYears(newYears);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Only calculate when form is submitted
    const calculatedAge = calculateDogAgeFromYears(years);
    setHumanAge(calculatedAge);
  };

  return (
    <div className="App">
      <main>
        <div className="container">
            <div className="dogphoto">
             <img
              src={dogphoto}
              alt="a dog wearing sunglasses"/>
            </div>
        
          <div className="question">
                Have you ever wondered how old your pup is in dog years?
          </div>

            <div className="form-container">
             <form onSubmit={handleSubmit}>
              
            <div className="input-container">
                <div className="input">
                 Enter your dog's age here: 
                 <div className="input-line">
                    <input
                    type="number"
                    name="years"
                    className="years"
                    value={years}
                    placeholder="0"
                    onChange={handleYearChange}
                    min="0"
                    max="30"
              />years</div>
              </div>
              
              <div className="results-box">
                <h2>Dog Years:</h2>
                 {humanAge !== null && (
                <div className="result-display">
                  <div className="human-age">{humanAge}</div>
                </div>
              )}</div>
            </div>
         <div className="action-area">
                    <button type="submit">Calculate</button>
                </div>
          </form>
        </div>
        </div>
      </main>
      <footer className="footer">Created by <a href="https://www.linkedin.com/in/heathersmith17/"> Heather Smith </a> © 2025</footer>
    </div>
  );
}
