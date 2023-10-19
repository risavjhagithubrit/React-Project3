//App.js
import React from 'react';
import ColorPicker from './TextForm';

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

const App = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <ColorPicker colors={colors} />
    </div>
  );
};

export default App;

//TextForm.jsx
import React, { useState } from 'react';

const ColorPicker = ({ colors }) => {
  const [showColors, setShowColors] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColors(false);
    document.body.style.backgroundColor = color; // Sets the body background color
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <button
        onClick={() => setShowColors(!showColors)}
        style={{
          backgroundColor: 'white',
          padding: '10px',
          borderRadius: '5px',
          color: selectedColor ? 'white' : 'black',
        }}
      >
        Pick a color
      </button>
      {showColors && (
        <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '10px' }}>
          {colors.map((color, index) => (
            <div
              key={index}
              style={{
                backgroundColor: color,
                width: '50px',
                height: '50px',
                margin: '5px',
                cursor: 'pointer',
              }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      )}
      {selectedColor && <p>You selected: {selectedColor}</p>}
    </div>
  );
};


export default ColorPicker;