import React, { useState } from 'react';
import './EightBall.css';

const EightBall = ({ answers }) => {
  const [currentColor, setCurrentColor] = useState('black');
  const [currentMsg, setCurrentMsg] = useState('Think of a Question');
  const [colorCounts, setColorCounts] = useState({});

  const handleClick = () => {
    // Choose a random answer
    const randomIndex = Math.floor(Math.random() * answers.length);
    const { msg, color } = answers[randomIndex];

    // Set the new color and message
    setCurrentColor(color);
    setCurrentMsg(msg);

    // Update color counts
    setColorCounts((prevCounts) => ({
      ...prevCounts,
      [color]: (prevCounts[color] || 0) + 1,
    }));
  };

  const handleReset = () => {
    // Reset to initial state
    setCurrentColor('black');
    setCurrentMsg('Think of a Question');
    setColorCounts({});
  };

  return (
    <div className="eight-ball-container">
      <div className="EightBall" style={{ backgroundColor: currentColor }} onClick={handleClick}>
        <p>{currentMsg}</p>
      </div>
      {Object.keys(colorCounts).length > 0 && (
        <div className="color-counts">
          <p>Color Counts:</p>
          {Object.keys(colorCounts).map((color) => (
            <p key={color}>{color}</p>
          ))}
        </div>
      )}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default EightBall;
